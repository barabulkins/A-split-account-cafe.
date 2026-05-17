import { DishesMainPage } from '../main-menu/dishes-main-page.js';
import { dishesApi } from '../../modules/dishes-api.js';
import { dishesUrls } from '../../modules/dishes-urls.js';
import { buildDishPayload, normalizeDish } from '../../modules/dishes-normalize.js';

export class DishesEditPage {
  constructor(parent, id = null) {
    this.parent = parent;
    this.id = id;
    this.isEditMode = Boolean(id);
  }

  get dishesPageRoot() {
    return document.getElementById('dishes-edit-page');
  }

  getDishesHTML() {
    return `
      <div class="dishes-content-wrapper w-100 d-flex justify-content-center">
        <div id="dishes-edit-page" class="w-100"></div>
      </div>
    `;
  }

  getFormHTML(data = {}) {
    return `
      <div class="card bg-transparent dishes-form-card mx-auto">
        <div class="card-body" style="border: 1px solid #fffefe">
          <h4 class="card-title mb-3">${this.isEditMode ? 'Редактирование карточки' : 'Добавление карточки'}</h4>
          <form id="dishes-edit-form" class="d-flex flex-column gap-3">
            <input id="dishes-title-input" class="form-control" type="text" placeholder="Название" value="${data.title || ''}">
            <input id="dishes-price-input" class="form-control" type="number" min="0" step="1" placeholder="Цена" value="${data.price || ''}">
            <input id="dishes-src-input" class="form-control" type="text" placeholder="Путь к изображению" value="${data.src || ''}">
            <input id="dishes-model-input" class="form-control" type="text" placeholder="Путь к 3D-модели" value="${data.modelPath || ''}">
            <textarea id="dishes-description-input" class="form-control" rows="3" placeholder="Описание">${data.description || ''}</textarea>
            <textarea id="dishes-composition-input" class="form-control" rows="4" placeholder="Состав">${data.composition || ''}</textarea>
            <textarea id="dishes-nutrition-input" class="form-control" rows="3" placeholder="Пищевая ценность">${data.nutrition || ''}</textarea>
            <div class="d-flex gap-2 flex-wrap">
              <button class="btn btn-outline-light" type="submit">Сохранить</button>
              <button class="btn btn-outline-light" id="dishes-cancel-button" type="button">Отмена</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  renderHeader() {
    const headerContainer = document.getElementById('dishes-buttons-container');
    if (!headerContainer) {
      return;
    }

    headerContainer.innerHTML = '<button id="dishes-back-button" class="btn btn-outline-light me-2" type="button">Домой</button>';
    const backButton = document.getElementById('dishes-back-button');
    if (backButton) {
      backButton.addEventListener('click', this.onCancel.bind(this));
    }
  }

  onCancel() {
    const mainPage = new DishesMainPage(this.parent);
    mainPage.renderDishes();
  }

  collectFormData() {
    return {
      title: document.getElementById('dishes-title-input').value,
      price: document.getElementById('dishes-price-input').value,
      src: document.getElementById('dishes-src-input').value,
      modelPath: document.getElementById('dishes-model-input').value,
      description: document.getElementById('dishes-description-input').value,
      composition: document.getElementById('dishes-composition-input').value,
      nutrition: document.getElementById('dishes-nutrition-input').value,
    };
  }

  validatePayload(payload) {
    if (!payload.title) {
      alert('Введите название блюда');
      return false;
    }

    if (payload.price === undefined || payload.price === null || Number.isNaN(Number(payload.price))) {
      alert('Введите цену блюда');
      return false;
    }

    return true;
  }

  async onSubmit(event) {
    event.preventDefault();
    const payload = buildDishPayload(this.collectFormData());

    if (!this.validatePayload(payload)) {
      return;
    }

    try {
      const response = this.isEditMode
        ? await dishesApi.patch(dishesUrls.updateDishById(this.id), payload)
        : await dishesApi.post(dishesUrls.createDish(), payload);

      if (!response.ok) {
        alert(this.isEditMode ? 'Не удалось обновить карточку' : 'Не удалось создать карточку');
        return;
      }

      const mainPage = new DishesMainPage(this.parent);
      mainPage.renderDishes();
    } catch (error) {
      console.error(error);
      alert(this.isEditMode ? 'Не удалось обновить карточку' : 'Не удалось создать карточку');
    }
  }

  bindFormListeners() {
    const form = document.getElementById('dishes-edit-form');
    const cancelButton = document.getElementById('dishes-cancel-button');

    if (form) {
      form.addEventListener('submit', this.onSubmit.bind(this));
    }

    if (cancelButton) {
      cancelButton.addEventListener('click', this.onCancel.bind(this));
    }
  }

  renderForm(data = {}) {
    this.dishesPageRoot.innerHTML = this.getFormHTML(data);
    this.bindFormListeners();
  }

  async getData() {
    if (!this.isEditMode) {
      this.renderForm();
      return;
    }

    try {
      const response = await dishesApi.get(dishesUrls.getDishById(this.id));
      if (!response.ok || !response.data) {
        this.dishesPageRoot.innerHTML = '<div class="dishes-empty-state">Карточка не найдена</div>';
        return;
      }

      const normalizedDish = normalizeDish(response.data);
      this.renderForm(normalizedDish);
    } catch (error) {
      console.error(error);
      this.dishesPageRoot.innerHTML = '<div class="dishes-empty-state">Карточка не найдена</div>';
    }
  }

  async renderDishes() {
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML());
    this.renderHeader();
    await this.getData();
  }
}
