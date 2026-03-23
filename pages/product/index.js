import { BackButtonComponent } from "../../components/back-button/index.js";
import { ProductComponent } from "../../components/product/index.js";
import { MainPage } from "../main/index.js";

export class ProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }
  static productsData = {
    1: {
      src: "img/medovik.png",
      title: "Торт Медовик",
      text: "<h6>Состав:</h6> <h7>Молокорастительный аналог сметаны с заменой молочного жира массовая доля жира 20% (восстановленное молоко из сухого молока, заменитель молочного жира (рафинированные дезодорированные растительные масла в натуральном и модифицированном вида, в том числе соевое; эмульгатор моно- и диглицериды жирных кислот, антиокислитель концентрат смеси токоферолов), стабилизатор Е1442.</h7><h6>На 100г:</h6> <h6>333 ккал; 4,7 белки; 17,7 жиры; 42,2 углеводы </h6>",
    },
    2: {
      src: "img/krevetki.jpg",
      title: "Хрустящая креветка",
      text: "<h6>Состав:</h6> <h7>Молокорастительный аналог сметаны с заменой молочного жира массовая доля жира 20% (восстановленное молоко из сухого молока, заменитель молочного жира (рафинированные дезодорированные растительные масла в натуральном и модифицированном вида, в том числе соевое; эмульгатор моно- и диглицериды жирных кислот, антиокислитель концентрат смеси токоферолов), стабилизатор Е1442.</h7><h6>На 100г:</h6> <h6>333 ккал; 4,7 белки; 17,7 жиры; 42,2 углеводы </h6>",
    },
    3: {
      src: "img/sharlotka.jpg",
      title: "Шарлотка",
      text: "<h6>Состав:</h6> <h7>Молокорастительный аналог сметаны с заменой молочного жира массовая доля жира 20% (восстановленное молоко из сухого молока, заменитель молочного жира (рафинированные дезодорированные растительные масла в натуральном и модифицированном вида, в том числе соевое; эмульгатор моно- и диглицериды жирных кислот, антиокислитель концентрат смеси токоферолов), стабилизатор Е1442.</h7><h6>На 100г:</h6> <h6>333 ккал; 4,7 белки; 17,7 жиры; 42,2 углеводы </h6>",
    },
  };

  getData() {
    return (
      ProductPage.productsData[this.id] || {
        id: this.id,
        src: "img/blin.jpg",
        title: `Акция ${this.id}`,
        text: "Такой акции вы еще не видели",
      }
    );
  }

  get pageRoot() {
    return document.getElementById("product-page");
  }

  getHTML() {
    return `<div id="product-page"></div>`;
  }

  clickBack() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  render() {
    this.parent.innerHTML = "";
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    const backButton = new BackButtonComponent(this.pageRoot);
    backButton.render(this.clickBack.bind(this));

    const data = this.getData();
    const product = new ProductComponent(this.pageRoot);
    product.render(data);
  }
}
