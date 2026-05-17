import { DishesProductComponent } from '../../components/dish/dishes-product-component.js';
import { DishesMainPage } from '../main-menu/dishes-main-page.js';
import { DishesEditPage } from '../edit-dish/dishes-edit-page.js';
import { dishesApi } from '../../modules/dishes-api.js';
import { normalizeDish } from '../../modules/dishes-normalize.js';

export class DishesProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  get dishesPageRoot() {
    return document.getElementById('dishes-product-page');
  }

  get dishesStatusRoot() {
    return document.getElementById('dishes-product-status');
  }

  getDishesHTML() {
    return `
      <section class="dishes-page-box">
        <div id="dishes-product-status" class="dishes-status-box"></div>
        <div id="dishes-product-page"></div>
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
      backButton.addEventListener('click', this.onBackButtonClick.bind(this));
    }
  }

  onBackButtonClick() {
    const mainPage = new DishesMainPage(this.parent);
    mainPage.renderDishes();
  }

  onEditButtonClick() {
    const editPage = new DishesEditPage(this.parent, this.id);
    editPage.renderDishes();
  }

  async getData() {
    this.setDishesStatus('Загрузка блюда...', 'secondary');

    try {
      const { data, ok, status } = await dishesApi.getDishById(this.id);
      if (!ok || !data) {
        this.dishesPageRoot.innerHTML = '<div class="alert alert-danger">Карточка не найдена.</div>';
        this.setDishesStatus(`Ошибка загрузки блюда. HTTP статус: ${status}.`, 'danger');
        return;
      }

      this.renderData(data);
      this.setDishesStatus('');
    } catch (error) {
      console.error(error);
      this.dishesPageRoot.innerHTML = '<div class="alert alert-danger">Карточка не найдена.</div>';
      this.setDishesStatus('Ошибка загрузки блюда. Проверьте API.', 'danger');
    }
  }

  renderData(item) {
    const normalizedItem = normalizeDish(item);
    const product = new DishesProductComponent(this.dishesPageRoot);
    product.renderDishes(normalizedItem, this.onEditButtonClick.bind(this));
  }

  async renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.renderHeader();
    await this.getData();
  }
}
