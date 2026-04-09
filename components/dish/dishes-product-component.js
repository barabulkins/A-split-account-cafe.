import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class DishesProductComponent {
  constructor(parent) {
    this.parent = parent;
    this.currentDishesRenderer = null;
  }

  getDishesHTML(data) {
    return `
      <div class="card bg-transparent" style="width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data.src}" class="img-fluid mb-2" alt="картинка">
            <canvas id="dishes-model-canvas-${data.id}" style="width: 100%; height: 200px; background: #e6ebf5; border-radius: 12px;"></canvas>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="color: rgb(255, 255, 255);">${data.title}</h5>
              <p class="card-text" style="color: rgb(255, 255, 255);">${data.text}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  initDishesThree(modelPath, canvasId) {
    if (this.currentDishesRenderer) {
      this.currentDishesRenderer.dispose();
      this.currentDishesRenderer = null;
    }

    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // Задаём реальные размеры canvas
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xe6ebf5, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0.5, 0);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.target.set(0, 0.5, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(2, 5, 3);
    scene.add(dirLight);

    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const min = box.min;
      model.position.x -= center.x;
      model.position.z -= center.z;
      model.position.y -= min.y;

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 1.5) {
        const scale = 1.5 / maxDim;
        model.scale.set(scale, scale, scale);
      }

      scene.add(model);
      controls.target.set(0, (size.y * (model.scale.y || 1)) / 2, 0);
      controls.update();
    }, undefined, (error) => {
      console.error('Ошибка загрузки модели:', error);
    });

    this.currentDishesRenderer = renderer;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }

  renderDishes(data) {
    const html = this.getDishesHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    if (data.modelPath) {
      this.initDishesThree(data.modelPath, `dishes-model-canvas-${data.id}`);
    } else {
      const canvas = document.getElementById(`dishes-model-canvas-${data.id}`);
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#e6ebf5";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "20px Arial";
        ctx.fillStyle = "#666";
        ctx.fillText("Модель не загружена", canvas.width / 2, canvas.height / 2);
      }
    }
  }
}