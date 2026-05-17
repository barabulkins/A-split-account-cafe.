import { DishesHeaderButtonComponent } from "../../components/buttons/dishes-header-button-component.js?v=3";
import { DishesProductComponent } from "../../components/dish/dishes-product-component.js?v=3";
import { dishesApi } from "../../modules/dishes-api.js";
import { DishesEditPage } from "../edit-dish/dishes-edit-page.js?v=3";
import { DishesMainPage } from "../main-menu/dishes-main-page.js?v=3";

export class DishesProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  get dishesPageRoot() {
    return document.getElementById("dishes-product-page");
  }

  get dishesStatusRoot() {
    return document.getElementById("dishes-product-status");
  }

  getDishesHTML() {
    return `
      <section class="dishes-page-box">
        <div id="dishes-product-status" class="dishes-status-box"></div>
        <div id="dishes-product-page"></div>
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
      this.onHomeButtonClick.bind(this),
    );
  }

  getDishesData() {
    dishesApi.getDishById(this.id, (dishData, dishesStatus) => {
      if (dishesStatus >= 200 && dishesStatus < 300 && dishData) {
        this.renderDishesData(dishData);
        return;
      }

      this.dishesPageRoot.innerHTML = `
        <div class="alert alert-danger">Не удалось получить блюдо с id = ${this.id}. HTTP статус: ${dishesStatus}.</div>
      `;
      this.setDishesStatus(`Ошибка загрузки блюда. HTTP статус: ${dishesStatus}.`, "danger");
    });
  }

  renderDishesData(dishData) {
    const dishesProduct = new DishesProductComponent(this.dishesPageRoot);
    dishesProduct.renderDishes(dishData, this.onEditButtonClick.bind(this));
  }

  onHomeButtonClick() {
    const dishesMainPage = new DishesMainPage(this.parent);
    dishesMainPage.renderDishes();
  }

  onEditButtonClick() {
    const dishesEditPage = new DishesEditPage(this.parent, this.id);
    dishesEditPage.renderDishes();
  }

  renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.configureDishesHeader();
    this.getDishesData();
  }
}
