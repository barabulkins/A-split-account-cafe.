import { DishesCardComponent } from '../../components/dish-card/dishes-card-component.js';
import { DishesProductPage } from '../product-dish/dishes-product-page.js';
import { DishesEditPage } from '../edit-dish/dishes-edit-page.js';
import { DishesAddCard } from '../../components/add-card-dish/dishes-add-card.js';
import { DishesRemoveCard } from '../../components/remove-dish/dishes-remove-card.js';
import { DishesHomeButton } from '../../components/close_menu/dishes-home-button.js';
import { DishesSearchPrice } from '../../components/search-price-dish/dishes-search-price.js';
import { dishesApi } from '../../modules/dishes-api.js';
import { dishesUrls } from '../../modules/dishes-urls.js';
import { normalizeDish } from '../../modules/dishes-normalize.js';

export class DishesMainPage {
  constructor(parent) {
    this.parent = parent;
    this.priceSearchValue = '';
  }

  get dishesPageRoot() {
    return document.getElementById('dishes-main-page');
  }

  getDishesHTML() {
    return `
      <div class="dishes-content-wrapper w-100">
        <div id="dishes-main-page" class="d-flex flex-wrap justify-content-center"></div>
      </div>
    `;
  }

  onDishCardClick(event) {
    const cardId = event.currentTarget.dataset.id;
    const productPage = new DishesProductPage(this.parent, cardId);
    productPage.renderDishes();
  }

  onEditDishClick(event) {
    const cardId = event.currentTarget.dataset.id;
    const editPage = new DishesEditPage(this.parent, cardId);
    editPage.renderDishes();
  }

  async onCreateDishClick() {
    try {
      const { data, ok } = await dishesApi.get(dishesUrls.getDishes());
      if (!ok || !Array.isArray(data) || data.length === 0) {
        alert('Не удалось добавить карточку');
        return;
      }

      const firstDish = normalizeDish(data[0]);
      const payload = {
        src: firstDish.src,
        title: firstDish.title,
        text: firstDish.text,
        modelPath: firstDish.modelPath,
        price: firstDish.price,
      };

      const response = await dishesApi.post(dishesUrls.createDish(), payload);

      if (!response.ok) {
        alert('Не удалось добавить карточку');
        return;
      }

      await this.getData();
    } catch (error) {
      console.error(error);
      this.renderError('Не удалось добавить карточку. Проверьте API.');
    }
  }

  onSearchByPrice(priceValue) {
    this.priceSearchValue = String(priceValue || '').trim();
    this.getData();
  }

  onResetSearch() {
    this.priceSearchValue = '';
    this.renderDishes();
  }

  async removeLastDish() {
    try {
      const { data, ok } = await dishesApi.get(dishesUrls.getDishes());
      if (!ok || !Array.isArray(data) || data.length === 0) {
        alert('Не удалось удалить карточку');
        return;
      }

      const sortedItems = [...data].sort((leftItem, rightItem) => Number(leftItem.id) - Number(rightItem.id));
      const lastDish = sortedItems[sortedItems.length - 1];
      const deleteResponse = await dishesApi.delete(dishesUrls.removeDishById(lastDish.id));

      if (!deleteResponse.ok) {
        alert('Не удалось удалить последнюю карточку');
        return;
      }

      await this.getData();
    } catch (error) {
      console.error(error);
      this.renderError('Не удалось выполнить удаление. Проверьте API.');
    }
  }

  closeDishesWindow() {
    window.open('', '_self');
    window.close();
    window.location.href = 'about:blank';
  }

  renderHeader() {
    const buttonsContainer = document.getElementById('dishes-buttons-container');
    if (!buttonsContainer) {
      return;
    }

    buttonsContainer.innerHTML = '';

    const addButton = new DishesAddCard(buttonsContainer);
    addButton.renderDishes(this.onCreateDishClick.bind(this));

    const removeButton = new DishesRemoveCard(buttonsContainer);
    removeButton.renderDishes(this.removeLastDish.bind(this));

    const homeButton = new DishesHomeButton(buttonsContainer);
    homeButton.renderDishes(this.closeDishesWindow.bind(this));

    const searchPrice = new DishesSearchPrice(buttonsContainer);
    searchPrice.renderDishes(
      this.onSearchByPrice.bind(this),
      this.onResetSearch.bind(this),
      this.priceSearchValue,
    );
  }

  async getData() {
    try {
      const url = dishesUrls.getDishes({ price: this.priceSearchValue });
      const { data, ok } = await dishesApi.get(url);
      if (!ok) {
        this.renderError('Не удалось загрузить карточки. Проверьте API.');
        return;
      }

      this.renderData(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      this.renderError('Не удалось загрузить карточки. Проверьте API.');
    }
  }

  renderData(items) {
    if (!this.dishesPageRoot) {
      return;
    }

    this.dishesPageRoot.innerHTML = '';

    if (!items.length) {
      this.dishesPageRoot.insertAdjacentHTML('beforeend', '<div class="dishes-empty-state">По вашему запросу ничего не найдено</div>');
      return;
    }

    items.map((item) => normalizeDish(item)).forEach((item) => {
      const productCard = new DishesCardComponent(this.dishesPageRoot);
      productCard.renderDishes(item, this.onDishCardClick.bind(this), this.onEditDishClick.bind(this));
    });
  }

  renderError(message) {
    if (!this.dishesPageRoot) {
      return;
    }

    this.dishesPageRoot.innerHTML = `<div class="dishes-empty-state">${message}</div>`;
  }

  async renderDishes() {
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML());
    this.renderHeader();
    await this.getData();
  }
}
