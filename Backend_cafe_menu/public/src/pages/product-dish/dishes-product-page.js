import { DishesProductComponent } from '../../components/dish/dishes-product-component.js';
import { DishesMainPage } from '../main-menu/dishes-main-page.js';
import { dishesApi } from '../../modules/dishes-api.js';
import { dishesUrls } from '../../modules/dishes-urls.js';
import { normalizeDish } from '../../modules/dishes-normalize.js';

export class DishesProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  get dishesPageRoot() {
    return document.getElementById('dishes-product-page');
  }

  getDishesHTML() {
    return `
      <div class="dishes-content-wrapper w-100 d-flex justify-content-center">
        <div id="dishes-product-page" class="w-100"></div>
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
      backButton.addEventListener('click', this.onBackButtonClick.bind(this));
    }
  }

  onBackButtonClick() {
    const mainPage = new DishesMainPage(this.parent);
    mainPage.renderDishes();
  }

  async getData() {
    try {
      const { data, ok } = await dishesApi.get(dishesUrls.getDishById(this.id));
      if (!ok || !data) {
        this.dishesPageRoot.innerHTML = '<div class="dishes-empty-state">Карточка не найдена</div>';
        return;
      }

      this.renderData(data);
    } catch (error) {
      console.error(error);
      this.dishesPageRoot.innerHTML = '<div class="dishes-empty-state">Карточка не найдена</div>';
    }
  }

  renderData(item) {
    const normalizedItem = normalizeDish(item);
    const product = new DishesProductComponent(this.dishesPageRoot);
    product.renderDishes(normalizedItem);
  }

  async renderDishes() {
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML());
    this.renderHeader();
    await this.getData();
  }
}
