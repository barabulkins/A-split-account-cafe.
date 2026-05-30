import { DishesCardComponent } from '../../components/dish-card/dishes-card-component.js';
import { DishesProductPage } from '../product-dish/dishes-product-page.js';
import { DishesEditPage } from '../edit-dish/dishes-edit-page.js';
import { dishesApi } from '../../modules/dishes-api.js';
import { normalizeDish, parseDishPrice } from '../../modules/dishes-normalize.js';

export class DishesMainPage {
  constructor(parent) {
    this.parent = parent;
    this.dishesSearchValue = '';
  }

  get dishesPageRoot() {
    return document.getElementById('dishes-main-page');
  }

  get dishesStatusRoot() {
    return document.getElementById('dishes-status-box');
  }

  getDishesHTML() {
    return `
      <section class="dishes-page-box">
        <div id="dishes-status-box" class="dishes-status-box"></div>
        <div class="dishes-page-actions">
          <button id="dishes-add-button" class="btn btn-outline-light" type="button">Добавить блюдо</button>
          <button id="dishes-refresh-button" class="btn btn-outline-light" type="button">Обновить список</button>
        </div>
        <div class="dishes-filter-box">
          <label for="dishes-search-input" class="form-label fw-bold">Поиск блюда по цене</label>
          <div class="d-flex gap-2 flex-wrap">
            <input id="dishes-search-input" class="form-control" type="text" placeholder="Введите цену, например 350" value="${this.dishesSearchValue}">
            <button id="dishes-search-button" class="btn btn-dark" type="button">Найти</button>
            <button id="dishes-reset-search-button" class="btn btn-outline-secondary" type="button">Сбросить</button>
          </div>
        </div>
        <div id="dishes-main-page" class="dishes-grid"></div>
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
    const buttonsContainer = document.getElementById('dishes-buttons-container');
    if (!buttonsContainer) {
      return;
    }

    buttonsContainer.innerHTML = `
      <button id="dishes-home-button" class="btn btn-outline-light" type="button">Домой</button>
    `;

    const homeButton = document.getElementById('dishes-home-button');
    if (homeButton) {
      homeButton.addEventListener('click', () => {
        this.dishesSearchValue = '';
        this.renderDishes();
      });
    }
  }

  addDishesPageActionListeners() {
    const addButton = document.getElementById('dishes-add-button');
    const refreshButton = document.getElementById('dishes-refresh-button');

    if (addButton) {
      addButton.addEventListener('click', this.onCreateDishClick.bind(this));
    }

    if (refreshButton) {
      refreshButton.addEventListener('click', () => this.getData(this.dishesSearchValue));
    }
  }

  addDishesSearchListeners() {
    const searchButton = document.getElementById('dishes-search-button');
    const resetButton = document.getElementById('dishes-reset-search-button');
    const searchInput = document.getElementById('dishes-search-input');

    const runPriceSearch = () => {
      this.dishesSearchValue = searchInput.value.trim();
      this.getData(this.dishesSearchValue);
    };

    if (searchButton) {
      searchButton.addEventListener('click', runPriceSearch);
    }

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        this.dishesSearchValue = '';
        searchInput.value = '';
        this.getData();
      });
    }

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          runPriceSearch();
        }
      });
    }
  }

  async getData(searchValue = '') {
    const isPriceSearch = Boolean(searchValue.trim());
    const normalizedPrice = parseDishPrice(searchValue);

    if (isPriceSearch && normalizedPrice === 0 && !/0/.test(searchValue)) {
      this.renderData([]);
      this.setDishesStatus('Для поиска по цене введите число, например 350 или 1 500.', 'warning');
      return;
    }

    try {
      const { data, ok, status } = await dishesApi.getDishes(
        isPriceSearch ? { price: normalizedPrice } : {},
      );

      if (!ok) {
        this.renderData([]);
        this.setDishesStatus(`Не удалось получить блюда. HTTP статус: ${status}.`, 'danger');
        return;
      }

      this.renderData(Array.isArray(data) ? data : []);
      this.setDishesStatus(
        isPriceSearch ? `Результаты поиска по цене: ${normalizedPrice}.` : '',
        'info',
      );
    } catch (error) {
      console.error(error);
      this.renderData([]);
      this.setDishesStatus('Не удалось получить блюда. Проверьте API.', 'danger');
    }
  }

  renderData(items) {
    if (!this.dishesPageRoot) {
      return;
    }

    this.dishesPageRoot.innerHTML = '';

    if (!items.length) {
      this.dishesPageRoot.insertAdjacentHTML(
        'beforeend',
        '<div class="alert alert-light dishes-empty-box text-center">Блюда не найдены. Проверьте API или добавьте новую запись.</div>',
      );
      return;
    }

    items.map((item) => normalizeDish(item)).forEach((item) => {
      const productCard = new DishesCardComponent(this.dishesPageRoot);
      productCard.renderDishes(
        item,
        this.onDishCardClick.bind(this),
        this.onDishEditClick.bind(this),
        this.onDishDeleteClick.bind(this),
      );
    });
  }

  onDishCardClick(event) {
    const cardId = event.currentTarget.dataset.id;
    const productPage = new DishesProductPage(this.parent, cardId);
    productPage.renderDishes();
  }

  onDishEditClick(event) {
    const cardId = event.currentTarget.dataset.id;
    const editPage = new DishesEditPage(this.parent, cardId);
    editPage.renderDishes();
  }

  async onDishDeleteClick(event) {
    const cardId = event.currentTarget.dataset.id;
    this.setDishesStatus('Удаление блюда...', 'warning');

    try {
      const response = await dishesApi.deleteDish(cardId);
      if (!response.ok) {
        this.setDishesStatus(`Не удалось удалить блюдо. HTTP статус: ${response.status}.`, 'danger');
        return;
      }

      await this.getData(this.dishesSearchValue);
    } catch (error) {
      console.error(error);
      this.setDishesStatus('Не удалось удалить блюдо. Проверьте API.', 'danger');
    }
  }

  onCreateDishClick() {
    const editPage = new DishesEditPage(this.parent);
    editPage.renderDishes();
  }

  async renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.renderHeader();
    this.addDishesPageActionListeners();
    this.addDishesSearchListeners();
    await this.getData(this.dishesSearchValue);
  }
}
