import { DishesMainPage } from '../main-menu/dishes-main-page.js';
import { DishesProductPage } from '../product-dish/dishes-product-page.js';
import { dishesApi } from '../../modules/dishes-api.js';
import {
  buildDishPayload,
  escapeHtml,
  normalizeDish,
  parseDishPrice,
} from '../../modules/dishes-normalize.js';

export class DishesEditPage {
  constructor(parent, id = null) {
    this.parent = parent;
    this.id = id;
    this.isEditMode = Boolean(id);
  }

  get dishesPageRoot() {
    return document.getElementById('dishes-edit-page');
  }

  get dishesStatusRoot() {
    return document.getElementById('dishes-edit-status');
  }

  getDishesHTML() {
    return `
      <section class="dishes-page-box">
        <div id="dishes-edit-status" class="dishes-status-box"></div>
        <div id="dishes-edit-page"></div>
      </section>
    `;
  }

  getFormHTML(data = {}) {
    const title = this.isEditMode ? `Редактирование блюда #${this.id}` : 'Добавление нового блюда';

    return `
      <section class="dishes-form-card p-4 shadow-lg">
        <h2 class="mb-4">${title}</h2>
        <form id="dishes-edit-form" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="dishes-title-input">Название блюда</label>
              <input id="dishes-title-input" name="title" class="form-control" type="text" required value="${escapeHtml(data.title || '')}">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="dishes-price-input">Цена</label>
              <input id="dishes-price-input" name="price" class="form-control" type="text" required value="${escapeHtml(data.price ? String(data.price) : '')}" placeholder="Например: 350">
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-description-input">Описание</label>
              <textarea id="dishes-description-input" name="description" class="form-control" rows="4" required>${escapeHtml(data.description || '')}</textarea>
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-composition-input">Состав</label>
              <textarea id="dishes-composition-input" name="composition" class="form-control" rows="3">${escapeHtml(data.composition || '')}</textarea>
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-nutrition-input">Пищевая ценность</label>
              <textarea id="dishes-nutrition-input" name="nutrition" class="form-control" rows="3">${escapeHtml(data.nutrition || '')}</textarea>
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-src-input">Путь к картинке</label>
              <input id="dishes-src-input" name="src" class="form-control" type="text" required value="${escapeHtml(data.src || '')}" placeholder="img/medovik.png">
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-model-input">Путь к 3D модели</label>
              <input id="dishes-model-input" name="modelPath" class="form-control" type="text" value="${escapeHtml(data.modelPath || '')}" placeholder="/models/medovik.glb">
            </div>
          </div>
          <div class="d-flex gap-2 mt-4 flex-wrap">
            <button class="btn btn-light" type="submit">Сохранить</button>
            <button class="btn btn-outline-light" id="dishes-cancel-button" type="button">Отмена</button>
          </div>
        </form>
      </section>
    `;
  }

  setDishesStatus(message, type = 'secondary') {
    if (!this.dishesStatusRoot) {
      return;
    }

    this.dishesStatusRoot.innerHTML = message
      ? `<div class="alert alert-${type} mb-3" role="alert">${message}</div>`
      : '';
  }

  renderHeader() {
    const headerContainer = document.getElementById('dishes-buttons-container');
    if (!headerContainer) {
      return;
    }

    headerContainer.innerHTML = '<button id="dishes-back-button" class="btn btn-outline-light" type="button">Домой</button>';
    const backButton = document.getElementById('dishes-back-button');
    if (backButton) {
      backButton.addEventListener('click', this.onHomeButtonClick.bind(this));
    }
  }

  onHomeButtonClick() {
    const mainPage = new DishesMainPage(this.parent);
    mainPage.renderDishes();
  }

  onCancel() {
    if (this.isEditMode) {
      const productPage = new DishesProductPage(this.parent, this.id);
      productPage.renderDishes();
      return;
    }

    this.onHomeButtonClick();
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

  validateFormData(formData) {
    if (!formData.title.trim()) {
      this.setDishesStatus('Введите название блюда.', 'warning');
      return false;
    }

    if (!formData.price.trim() || Number.isNaN(parseDishPrice(formData.price))) {
      this.setDishesStatus('Введите цену блюда числом.', 'warning');
      return false;
    }

    if (!formData.src.trim()) {
      this.setDishesStatus('Укажите путь к картинке.', 'warning');
      return false;
    }

    return true;
  }

  async onSubmit(event) {
    event.preventDefault();

    const formData = this.collectFormData();
    if (!this.validateFormData(formData)) {
      return;
    }

    const payload = buildDishPayload(formData);
    this.setDishesStatus('Сохранение блюда...', 'secondary');

    try {
      const response = this.isEditMode
        ? await dishesApi.updateDish(this.id, payload)
        : await dishesApi.createDish(payload);

      if (!response.ok) {
        this.setDishesStatus(`Не удалось сохранить блюдо. HTTP статус: ${response.status}.`, 'danger');
        return;
      }

      if (this.isEditMode) {
        const productPage = new DishesProductPage(this.parent, this.id);
        productPage.renderDishes();
        return;
      }

      const mainPage = new DishesMainPage(this.parent);
      mainPage.renderDishes();
    } catch (error) {
      console.error(error);
      this.setDishesStatus('Не удалось сохранить блюдо. Проверьте API.', 'danger');
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
      this.renderForm({
        src: 'img/medovik.png',
        modelPath: '/models/medovik.glb',
      });
      return;
    }

    this.setDishesStatus('Загрузка данных блюда для редактирования...', 'secondary');

    try {
      const response = await dishesApi.getDishById(this.id);
      if (!response.ok || !response.data) {
        this.dishesPageRoot.innerHTML = '<div class="alert alert-danger">Карточка не найдена.</div>';
        this.setDishesStatus(`Не удалось загрузить блюдо. HTTP статус: ${response.status}.`, 'danger');
        return;
      }

      this.renderForm(normalizeDish(response.data));
      this.setDishesStatus('Данные блюда загружены.', 'info');
    } catch (error) {
      console.error(error);
      this.dishesPageRoot.innerHTML = '<div class="alert alert-danger">Карточка не найдена.</div>';
      this.setDishesStatus('Не удалось загрузить блюдо. Проверьте API.', 'danger');
    }
  }

  async renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.renderHeader();
    await this.getData();
  }
}
