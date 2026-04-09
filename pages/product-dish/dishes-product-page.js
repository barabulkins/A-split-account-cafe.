import { DishesProductComponent } from "../../components/dish/dishes-product-component.js";
import { DishesMainPage } from "../main-menu/dishes-main-page.js";

export class DishesProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  static dishesProductsData = {
    1: {
      src: "img/medovik.png",
      title: "Торт Медовик",
      text: "<h6>Состав:</h6> <h7>Молокорастительный аналог сметаны с заменой молочного жира массовая доля жира 20% (восстановленное молоко из сухого молока, заменитель молочного жира (рафинированные дезодорированные растительные масла в натуральном и модифицированном вида, в том числе соевое; эмульгатор моно- и диглицериды жирных кислот, антиокислитель концентрат смеси токоферолов), стабилизатор Е1442.</h7><h6>На 100г:</h6> <h6>333 ккал; 4,7 белки; 17,7 жиры; 42,2 углеводы </h6>",
      modelPath: "models/medovik.glb",
    },
    2: {
      src: "img/krevetki.jpg",
      title: "Хрустящая креветка",
      text: "<h6>Состав:</h6> <h7>Молокорастительный аналог сметаны с заменой молочного жира массовая доля жира 20% (восстановленное молоко из сухого молока, заменитель молочного жира (рафинированные дезодорированные растительные масла в натуральном и модифицированном вида, в том числе соевое; эмульгатор моно- и диглицериды жирных кислот, антиокислитель концентрат смеси токоферолов), стабилизатор Е1442.</h7><h6>На 100г:</h6> <h6>333 ккал; 4,7 белки; 17,7 жиры; 42,2 углеводы </h6>",
      modelPath: "models/shrimps.glb",
    },
    3: {
      src: "img/sharlotka.jpg",
      title: "Шарлотка",
      text: "<h6>Состав:</h6> <h7>Молокорастительный аналог сметаны с заменой молочного жира массовая доля жира 20% (восстановленное молоко из сухого молока, заменитель молочного жира (рафинированные дезодорированные растительные масла в натуральном и модифицированном вида, в том числе соевое; эмульгатор моно- и диглицериды жирных кислот, антиокислитель концентрат смеси токоферолов), стабилизатор Е1442.</h7><h6>На 100г:</h6> <h6>333 ккал; 4,7 белки; 17,7 жиры; 42,2 углеводы </h6>",
      modelPath: "models/sharlotka.glb",
    },
  };

  getDishesData() {
    return (
      DishesProductPage.dishesProductsData[this.id] || {
        id: this.id,
        src: "img/blin.jpg",
        title: `Акция ${this.id}`,
        text: "Такой акции вы еще не видели",
        modelPath: null,
      }
    );
  }

  get dishesPageRoot() {
    return document.getElementById("dishes-product-page");
  }

  getDishesHTML() {
    return `<div id="dishes-product-page"></div>`;
  }

  onBackButtonClick() {
    const mainPage = new DishesMainPage(this.parent);
    mainPage.renderDishes();
  }

  renderDishes() {
    this.parent.innerHTML = "";
    const html = this.getDishesHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    // Меняем содержимое хэдера: очищаем контейнер и добавляем кнопку "Назад"
    const headerContainer = document.getElementById("dishes-buttons-container");
    if (headerContainer) {
      headerContainer.innerHTML = `
        <button id="dishes-back-button" class="btn btn-outline-light me-2" type="button">Домой</button>
      `;
      const backBtn = document.getElementById("dishes-back-button");
      if (backBtn) {
        backBtn.addEventListener("click", this.onBackButtonClick.bind(this));
      }
    }

    const data = this.getDishesData();
    const product = new DishesProductComponent(this.dishesPageRoot);
    product.renderDishes(data);
  }
}