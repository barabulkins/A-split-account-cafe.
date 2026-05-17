import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class DishesProductComponent {
  constructor(parent) {
    this.parent = parent;
    this.currentDishesRenderer = null;
    this.animationFrameId = null;
  }

  getDishesHTML(data) {
    return `
      <div class="card bg-transparent dishes-product-card" style="width: 720px; max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data.src}" class="img-fluid mb-2" alt="картинка" onerror="this.onerror=null;this.src='/img/default-dish.svg';">
            <canvas id="dishes-model-canvas-${data.id}" style="width: 100%; height: 240px; background: #e6ebf5; border-radius: 12px;"></canvas>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="color: rgb(255, 255, 255);">${data.title}</h5>
              <div class="card-text" style="color: rgb(255, 255, 255);">${data.detailsHtml}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  clearRenderer() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.currentDishesRenderer) {
      this.currentDishesRenderer.dispose();
      this.currentDishesRenderer = null;
    }
  }

  buildFallbackObject(itemId) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0xc58b5b });

    if (itemId === 1) {
      const geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.5, 32);
      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);
      return group;
    }

    if (itemId === 2) {
      const geometry = new THREE.TorusKnotGeometry(0.45, 0.16, 100, 16);
      const shrimpMaterial = new THREE.MeshStandardMaterial({ color: 0xff8a65 });
      const mesh = new THREE.Mesh(geometry, shrimpMaterial);
      mesh.rotation.x = Math.PI / 2;
      group.add(mesh);
      return group;
    }

    const base = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.22, 0.9), material);
    const middle = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.22, 0.7), material);
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.22, 0.5), material);
    base.position.y = 0;
    middle.position.y = 0.28;
    top.position.y = 0.56;
    group.add(base, middle, top);
    return group;
  }

  initScene(canvasId) {
    this.clearRenderer();

    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      return null;
    }

    const width = canvas.clientWidth || 240;
    const height = canvas.clientHeight || 240;
    canvas.width = width;
    canvas.height = height;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xe6ebf5, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.4, 3.4);
    camera.lookAt(0, 0.5, 0);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.target.set(0, 0.5, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 5, 3);
    scene.add(dirLight);

    this.currentDishesRenderer = renderer;

    const animate = () => {
      this.animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return { scene, camera, controls, canvas };
  }

  addObjectToScene(object, scene, controls) {
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const min = box.min;

    object.position.x -= center.x;
    object.position.z -= center.z;
    object.position.y -= min.y;

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 1.6) {
      const scale = 1.6 / maxDim;
      object.scale.set(scale, scale, scale);
    }

    scene.add(object);
    controls.target.set(0, 0.5, 0);
    controls.update();
  }

  initDishesThree(modelPath, canvasId, itemId) {
    const sceneData = this.initScene(canvasId);
    if (!sceneData) {
      return;
    }

    const { scene, controls } = sceneData;

    const useFallback = () => {
      const fallbackObject = this.buildFallbackObject(itemId);
      this.addObjectToScene(fallbackObject, scene, controls);
    };

    if (!modelPath) {
      useFallback();
      return;
    }

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        this.addObjectToScene(gltf.scene, scene, controls);
      },
      undefined,
      () => {
        useFallback();
      }
    );
  }

  renderDishes(data) {
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML(data));
    this.initDishesThree(data.modelPath, `dishes-model-canvas-${data.id}`, Number(data.id));
  }
}
