import { DishesCardComponent } from "../../components/dish-card/dishes-card-component.js?v=3";
import { DishesHeaderButtonComponent } from "../../components/buttons/dishes-header-button-component.js?v=3";
import { DishesCreatePage } from "../create-dish/dishes-create-page.js?v=3";
import { DishesProductPage } from "../product-dish/dishes-product-page.js?v=3";
import { dishesApi } from "../../modules/dishes-api.js";

export class DishesMainPage {
  constructor(parent) {
    this.parent = parent;
    this.dishesSearchValue = "";
  }

  normalizeDishesPriceValue(value) {
    const digitsOnly = String(value ?? "").replace(/[^\d]/g, "");
    return digitsOnly ? Number(digitsOnly) : null;
  }

  get dishesPageRoot() {
    return document.getElementById("dishes-main-page");
  }

  get dishesStatusRoot() {
    return document.getElementById("dishes-status-box");
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
            <input id="dishes-search-input" class="form-control" type="text" placeholder="Введите цену, например 1500 или 2 500" value="${this.dishesSearchValue}">
            <button id="dishes-search-button" class="btn btn-dark" type="button">Найти</button>
            <button id="dishes-reset-search-button" class="btn btn-outline-secondary" type="button">Сбросить</button>
          </div>
        </div>
        <div id="dishes-main-page" class="dishes-grid"></div>
      </section>
    `;
  }

  setDishesStatus(message, type = "secondary") {
    if (!this.dishesStatusRoot) return;

    if (!message) {
      this.dishesStatusRoot.innerHTML = "";
      return;
    }

    this.dishesStatusRoot.innerHTML = `
      <div class="alert alert-${type} mb-3" role="alert">
        ${message}
      </div>
    `;
  }

  configureDishesHeader() {
    const dishesButtonsContainer = document.getElementById("dishes-buttons-container");
    if (!dishesButtonsContainer) return;

    dishesButtonsContainer.innerHTML = "";

    const dishesHomeButton = new DishesHeaderButtonComponent(dishesButtonsContainer);
    dishesHomeButton.renderDishes(
      { id: "dishes-home-button", text: "Домой" },
      () => {
        this.dishesSearchValue = "";
        this.renderDishes();
      },
    );
  }

  addDishesPageActionListeners() {
    const dishesAddButton = document.getElementById("dishes-add-button");
    const dishesRefreshButton = document.getElementById("dishes-refresh-button");

    if (dishesAddButton) {
      dishesAddButton.addEventListener("click", this.onCreateDishClick.bind(this));
    }

    if (dishesRefreshButton) {
      dishesRefreshButton.addEventListener("click", () => this.getDishesData(this.dishesSearchValue));
    }
  }

  addDishesSearchListeners() {
    const dishesSearchButton = document.getElementById("dishes-search-button");
    const dishesResetButton = document.getElementById("dishes-reset-search-button");
    const dishesSearchInput = document.getElementById("dishes-search-input");

    const runDishesPriceSearch = () => {
      this.dishesSearchValue = dishesSearchInput.value.trim();
      this.getDishesData(this.dishesSearchValue);
    };

    if (dishesSearchButton) {
      dishesSearchButton.addEventListener("click", runDishesPriceSearch);
    }

    if (dishesResetButton) {
      dishesResetButton.addEventListener("click", () => {
        this.dishesSearchValue = "";
        dishesSearchInput.value = "";
        this.getDishesData();
      });
    }

    if (dishesSearchInput) {
      dishesSearchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          runDishesPriceSearch();
        }
      });
    }
  }

  getDishesData(searchValue = "") {
    const isPriceSearch = Boolean(searchValue.trim());
    const normalizedPriceValue = this.normalizeDishesPriceValue(searchValue);

    if (isPriceSearch && normalizedPriceValue === null) {
      this.renderDishesData([]);
      this.setDishesStatus("Для поиска по цене введите число, например 1500 или 2 500.", "warning");
      return;
    }

    dishesApi.getDishes(searchValue, (dishesItems, dishesStatus) => {
      if (dishesStatus >= 200 && dishesStatus < 300) {
        this.renderDishesData(Array.isArray(dishesItems) ? dishesItems : []);

        if (isPriceSearch) {
          this.setDishesStatus(`Результаты поиска по цене: ${normalizedPriceValue}.`, "info");
        } else {
          this.setDishesStatus("");
        }

        return;
      }

      this.renderDishesData([]);
      this.setDishesStatus(`Не удалось получить блюда. HTTP статус: ${dishesStatus}.`, "danger");
    });
  }

  renderDishesData(dishesItems) {
    this.dishesPageRoot.innerHTML = "";

    if (!dishesItems.length) {
      this.dishesPageRoot.innerHTML = `
        <div class="alert alert-light dishes-empty-box text-center">
          Блюда не найдены. Проверьте API или добавьте новую запись.
        </div>
      `;
      return;
    }

    dishesItems.forEach((dishesItem) => {
      const dishesCard = new DishesCardComponent(this.dishesPageRoot);
      dishesCard.renderDishes(
        dishesItem,
        this.onDishCardClick.bind(this),
        this.onDishDeleteClick.bind(this),
      );
    });
  }

  onDishCardClick(event) {
    const dishesCardId = event.currentTarget.dataset.id;
    const dishesProductPage = new DishesProductPage(this.parent, dishesCardId);
    dishesProductPage.renderDishes();
  }

  onDishDeleteClick(event) {
    const dishesCardId = event.currentTarget.dataset.id;
    const isDeleteConfirmed = window.confirm("Удалить это блюдо из API?");
    if (!isDeleteConfirmed) return;

    this.setDishesStatus("Удаление блюда...", "warning");

    dishesApi.deleteDish(dishesCardId, (_, dishesStatus) => {
      if (dishesStatus >= 200 && dishesStatus < 300) {
        this.getDishesData(this.dishesSearchValue);
        return;
      }

      this.setDishesStatus(`Не удалось удалить блюдо. HTTP статус: ${dishesStatus}.`, "danger");
    });
  }

  onCreateDishClick() {
    const dishesCreatePage = new DishesCreatePage(this.parent);
    dishesCreatePage.renderDishes();
  }

  renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.configureDishesHeader();
    this.addDishesPageActionListeners();
    this.addDishesSearchListeners();
    this.getDishesData(this.dishesSearchValue);
  }
}
