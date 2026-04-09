import { DishesCardComponent } from "../../components/dish-card/dishes-card-component.js";
import { DishesProductPage } from "../product-dish/dishes-product-page.js";
import { DishesAddCard } from "../../components/add-card-dish/dishes-add-card.js";
import { DishesRemoveCard } from "../../components/remove-dish/dishes-remove-card.js";
import { DishesHomeButton } from "../../components/close_menu/dishes-home-button.js";

export class DishesMainPage {
  constructor(parent) {
    this.parent = parent;
    this.dishesCardsData = this.getDishesData();
  }

  getDishesData() {
    return [
      {
        id: 1,
        src: "img/medovik.png",
        title: "Медовик",
        text: "2 500 ₽",
        modelPath: "models/medovik.glb",
      },
      {
        id: 2,
        src: "img/krevetki.jpg",
        title: "Хрустящая креветка",
        text: "1 500 ₽",
        modelPath: "models/shrimps.glb",
      },
      {
        id: 3,
        src: "img/sharlotka.jpg",
        title: "Шарлотка",
        text: "2 000 ₽",
        modelPath: "models/sharlotka.glb",
      },
    ];
  }

  get dishesPageRoot() {
    return document.getElementById("dishes-main-page");
  }

  getDishesHTML() {
    return `<div id="dishes-main-page" class="d-flex flex-wrap"></div>`;
  }

  onDishCardClick(e) {
    const cardId = e.target.dataset.id;
    const productPage = new DishesProductPage(this.parent, cardId);
    productPage.renderDishes();
  }

  addFirstDishCopy() {
    if (this.dishesCardsData.length === 0) return;
    const first = this.dishesCardsData[0];

    const matrix = [
      ["А", "Б", "В"],
      ["Г", "Д", "Е"],
      ["Ё", " ь", "."],
    ];
    const n = matrix.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    const stateMatrix = { result: "", log: "" };

    do {
      const i = indices.shift();
      const j = n - 1 - i;
      stateMatrix.result += matrix[i][i];
      if (i !== j) {
        stateMatrix.result += matrix[i][j];
      }
      stateMatrix.log += `Обработан индекс ${i}, результат: "${stateMatrix.result}"\n`;
    } while (indices.length > 0);

    console.log(stateMatrix.log);
    const diagonalString = stateMatrix.result;

    const palindrome1 = (str) => {
      if (str.length <= 1) return true;
      const state = { left: 0, right: str.length - 1, isPalindrome: true };
      do {
        if (str[state.left] !== str[state.right]) {
          state.isPalindrome = false;
          break;
        }
        state.left++;
        state.right--;
      } while (state.left < state.right);
      return state.isPalindrome;
    };

    const palindrome2 = (str) => {
      if (str.length <= 1) return true;
      const state = { current: str, isPalindrome: true };
      do {
        const first = state.current[0];
        const last = state.current[state.current.length - 1];
        if (first !== last) {
          state.isPalindrome = false;
          break;
        }
        state.current = state.current.slice(1, -1);
      } while (state.current.length > 1);
      return state.isPalindrome;
    };

    const isPal1 = palindrome1(diagonalString);
    const isPal2 = palindrome2(diagonalString);

    const newId = Date.now();
    const copy = {
      ...first,
      id: newId,
      title: `${first.title} "${diagonalString}". Проверка палиндрома - ${isPal1 && isPal2}`,
    };

    this.dishesCardsData.push(copy);
    this.renderDishes();
  }

  removeLastDish() {
    if (this.dishesCardsData.length === 0) return;
    this.dishesCardsData.pop();
    this.renderDishes();
  }

  // Функция закрытия окна с обходом ограничений безопасности
  closeDishesWindow() {
    window.open('', '_self');
    window.close();
    window.location.href = 'about:blank';
  }

  renderDishes() {
    this.parent.innerHTML = "";
    const html = this.getDishesHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    const buttonsContainer = document.getElementById("dishes-buttons-container");
    if (buttonsContainer) buttonsContainer.innerHTML = "";

    const addButton = new DishesAddCard(buttonsContainer);
    addButton.renderDishes(this.addFirstDishCopy.bind(this));
    const removeButton = new DishesRemoveCard(buttonsContainer);
    removeButton.renderDishes(this.removeLastDish.bind(this));
    const homeButton = new DishesHomeButton(buttonsContainer);
    homeButton.renderDishes(this.closeDishesWindow.bind(this));

    this.dishesCardsData.forEach((item) => {
      const productCard = new DishesCardComponent(this.dishesPageRoot);
      productCard.renderDishes(item, this.onDishCardClick.bind(this));
    });
  }
}