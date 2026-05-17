import { DishesHeaderButtonComponent } from "../../components/buttons/dishes-header-button-component.js?v=3";
import { DishesFormComponent } from "../../components/form/dishes-form-component.js?v=3";
import { DishesMainPage } from "../main-menu/dishes-main-page.js?v=3";

export class DishesCreatePage {
  constructor(parent) {
    this.parent = parent;
  }

  get dishesPageRoot() {
    return document.getElementById("dishes-create-page");
  }

  get dishesStatusRoot() {
    return document.getElementById("dishes-create-status");
  }

  getDishesHTML() {
    return `
      <section class="dishes-page-box">
        <div id="dishes-create-status" class="dishes-status-box"></div>
        <div id="dishes-create-page"></div>
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

  onHomeButtonClick() {
    const dishesMainPage = new DishesMainPage(this.parent);
    dishesMainPage.renderDishes();
  }

  renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.configureDishesHeader();

    const dishesForm = new DishesFormComponent(this.dishesPageRoot);
    dishesForm.renderDishes(
      {
        title: "Добавление нового блюда",
        showSubmitButton: false,
      },
      null,
      this.onHomeButtonClick.bind(this),
    );
  }
}
