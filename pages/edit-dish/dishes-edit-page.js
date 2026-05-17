import { DishesHeaderButtonComponent } from "../../components/buttons/dishes-header-button-component.js?v=3";
import { DishesFormComponent } from "../../components/form/dishes-form-component.js?v=3";
import { dishesApi } from "../../modules/dishes-api.js";
import { DishesMainPage } from "../main-menu/dishes-main-page.js?v=3";
import { DishesProductPage } from "../product-dish/dishes-product-page.js?v=3";

export class DishesEditPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  get dishesPageRoot() {
    return document.getElementById("dishes-edit-page");
  }

  get dishesStatusRoot() {
    return document.getElementById("dishes-edit-status");
  }

  getDishesHTML() {
    return `
      <section class="dishes-page-box">
        <div id="dishes-edit-status" class="dishes-status-box"></div>
        <div id="dishes-edit-page"></div>
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

  getDishForEdit() {
    this.setDishesStatus("Загрузка данных блюда для редактирования...", "secondary");

    dishesApi.getDishById(this.id, (dishData, dishesStatus) => {
      if (dishesStatus >= 200 && dishesStatus < 300 && dishData) {
        this.renderDishesForm(dishData);
        this.setDishesStatus("Данные блюда загружены.", "info");
        return;
      }

      this.setDishesStatus(`Не удалось загрузить блюдо для редактирования. HTTP статус: ${dishesStatus}.`, "danger");
    });
  }

  renderDishesForm(dishData) {
    const dishesForm = new DishesFormComponent(this.dishesPageRoot);
    dishesForm.renderDishes(
      {
        title: `Редактирование блюда #${this.id}`,
        showSubmitButton: false,
        dishData,
      },
      null,
      this.onCancelButtonClick.bind(this),
    );
  }

  onHomeButtonClick() {
    const dishesMainPage = new DishesMainPage(this.parent);
    dishesMainPage.renderDishes();
  }

  onCancelButtonClick() {
    const dishesProductPage = new DishesProductPage(this.parent, this.id);
    dishesProductPage.renderDishes();
  }

  renderDishes() {
    this.parent.innerHTML = this.getDishesHTML();
    this.configureDishesHeader();
    this.getDishForEdit();
  }
}
