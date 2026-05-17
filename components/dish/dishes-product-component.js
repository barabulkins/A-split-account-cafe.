import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class DishesProductComponent {
  constructor(parent) {
    this.parent = parent;
    this.currentDishesRenderer = null;
    this.currentDishesAnimationFrameId = null;
  }

  escapeDishesHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  getDishesImageSource(dishesItem) {
    return dishesItem.src || "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27400%27 height=%27280%27 viewBox=%270 0 400 280%27%3E%3Crect width=%27400%27 height=%27280%27 fill=%27%23d9d9d9%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2724%27 text-anchor=%27middle%27 fill=%27%23666%27 dy=%27.3em%27%3EDishes%3C/text%3E%3C/svg%3E";
  }

  getDishesPrice(dishesItem) {
    return dishesItem.price || dishesItem.text || "Цена не указана";
  }

  getDishesDescription(dishesItem) {
    return dishesItem.description || dishesItem.text || "Описание отсутствует";
  }

  getDishesHTML(dishesItem) {
    return `
      <section class="dishes-product-card p-3 p-md-4 shadow-lg">
        <div class="row g-4 align-items-start">
          <div class="col-md-5">
            <img src="${this.getDishesImageSource(dishesItem)}" class="img-fluid mb-3" alt="${this.escapeDishesHtml(dishesItem.title || "Блюдо")}">
            <canvas id="dishes-model-canvas-${dishesItem.id}" class="dishes-model-canvas"></canvas>
          </div>
          <div class="col-md-7">
            <h2 class="mb-3">${this.escapeDishesHtml(dishesItem.title || "Без названия")}</h2>
            <div class="dishes-price mb-3">${this.escapeDishesHtml(this.getDishesPrice(dishesItem))}</div>
            <p class="dishes-description mb-3">${this.escapeDishesHtml(this.getDishesDescription(dishesItem))}</p>
            <ul class="list-group list-group-flush rounded overflow-hidden">
              <li class="list-group-item"><strong>ID:</strong> ${this.escapeDishesHtml(dishesItem.id ?? "—")}</li>
              <li class="list-group-item"><strong>Картинка:</strong> ${this.escapeDishesHtml(dishesItem.src || "—")}</li>
              <li class="list-group-item"><strong>3D модель:</strong> ${this.escapeDishesHtml(dishesItem.modelPath || "не указана")}</li>
            </ul>
            <button id="dishes-edit-button" class="btn btn-outline-light mt-3" type="button">Редактировать</button>
          </div>
        </div>
      </section>
    `;
  }

  destroyDishesRenderer() {
    if (this.currentDishesAnimationFrameId) {
      cancelAnimationFrame(this.currentDishesAnimationFrameId);
      this.currentDishesAnimationFrameId = null;
    }

    if (this.currentDishesRenderer) {
      this.currentDishesRenderer.dispose();
      this.currentDishesRenderer = null;
    }
  }

  initDishesThree(modelPath, canvasId) {
    this.destroyDishesRenderer();

    const dishesCanvas = document.getElementById(canvasId);
    if (!dishesCanvas) return;

    const dishesWidth = dishesCanvas.clientWidth || 320;
    const dishesHeight = dishesCanvas.clientHeight || 260;
    dishesCanvas.width = dishesWidth;
    dishesCanvas.height = dishesHeight;

    const dishesRenderer = new THREE.WebGLRenderer({ canvas: dishesCanvas, alpha: false, antialias: true });
    dishesRenderer.setSize(dishesWidth, dishesHeight);
    dishesRenderer.setClearColor(0xe6ebf5, 1);

    const dishesScene = new THREE.Scene();
    const dishesCamera = new THREE.PerspectiveCamera(45, dishesWidth / dishesHeight, 0.1, 1000);
    dishesCamera.position.set(0, 1, 3);
    dishesCamera.lookAt(0, 0.5, 0);

    const dishesControls = new OrbitControls(dishesCamera, dishesCanvas);
    dishesControls.enableDamping = true;
    dishesControls.enableZoom = true;
    dishesControls.target.set(0, 0.5, 0);

    const dishesAmbientLight = new THREE.AmbientLight(0xffffff, 0.7);
    dishesScene.add(dishesAmbientLight);

    const dishesDirectionLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dishesDirectionLight.position.set(2, 5, 3);
    dishesScene.add(dishesDirectionLight);

    const dishesLoader = new GLTFLoader();
    dishesLoader.load(
      modelPath,
      (gltf) => {
        const dishesModel = gltf.scene;
        const dishesBox = new THREE.Box3().setFromObject(dishesModel);
        const dishesCenter = dishesBox.getCenter(new THREE.Vector3());
        const dishesMin = dishesBox.min;

        dishesModel.position.x -= dishesCenter.x;
        dishesModel.position.z -= dishesCenter.z;
        dishesModel.position.y -= dishesMin.y;

        const dishesSize = dishesBox.getSize(new THREE.Vector3());
        const dishesMaxDimension = Math.max(dishesSize.x, dishesSize.y, dishesSize.z);

        if (dishesMaxDimension > 1.5) {
          const dishesScale = 1.5 / dishesMaxDimension;
          dishesModel.scale.set(dishesScale, dishesScale, dishesScale);
        }

        dishesScene.add(dishesModel);
        dishesControls.target.set(0, (dishesSize.y * (dishesModel.scale.y || 1)) / 2, 0);
        dishesControls.update();
      },
      undefined,
      (error) => {
        console.error("Ошибка загрузки 3D модели:", error);
        this.renderDishesCanvasFallback(canvasId, "Модель не удалось загрузить");
      },
    );

    this.currentDishesRenderer = dishesRenderer;

    const animateDishes = () => {
      this.currentDishesAnimationFrameId = requestAnimationFrame(animateDishes);
      dishesControls.update();
      dishesRenderer.render(dishesScene, dishesCamera);
    };

    animateDishes();
  }

  renderDishesCanvasFallback(canvasId, text) {
    const dishesCanvas = document.getElementById(canvasId);
    if (!dishesCanvas) return;

    const dishesContext = dishesCanvas.getContext("2d");
    dishesCanvas.width = dishesCanvas.clientWidth || 320;
    dishesCanvas.height = dishesCanvas.clientHeight || 260;
    dishesContext.fillStyle = "#e6ebf5";
    dishesContext.fillRect(0, 0, dishesCanvas.width, dishesCanvas.height);
    dishesContext.font = "20px Arial";
    dishesContext.fillStyle = "#666666";
    dishesContext.textAlign = "center";
    dishesContext.fillText(text, dishesCanvas.width / 2, dishesCanvas.height / 2);
  }

  renderDishes(dishesItem, onEdit) {
    this.parent.innerHTML = this.getDishesHTML(dishesItem);
    const dishesEditButton = document.getElementById("dishes-edit-button");

    if (dishesEditButton && typeof onEdit === "function") {
      dishesEditButton.addEventListener("click", onEdit);
    }

    if (dishesItem.modelPath) {
      this.initDishesThree(dishesItem.modelPath, `dishes-model-canvas-${dishesItem.id}`);
      return;
    }

    this.renderDishesCanvasFallback(`dishes-model-canvas-${dishesItem.id}`, "Модель не указана");
  }
}
