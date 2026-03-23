import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { AddCard } from "../../components/add-card/index.js";
import { RemoveCard } from "../../components/remove-card/index.js";
import { HomeButton } from "../../components/home-button/index.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.cardsData = this.getData(); // сохраняем данные в экземпляр класса
  }

  getData() {
    return [
      {
        id: 1,
        src: "img/medovik.png",
        title: "Медовик",
        text: "2 500 ₽",
      },
      {
        id: 2,
        src: "img/krevetki.jpg",
        title: "Хрустящая креветка",
        text: "1 500 ₽",
      },
      {
        id: 3,
        src: "img/sharlotka.jpg",
        title: "Шарлотка",
        text: "2 000 ₽",
      },
    ];
  }

  get pageRoot() {
    return document.getElementById("main-page");
  }

  getHTML() {
    return `
    <div id="main-page" class="d-flex flex-wrap">
      <div id="buttons-container" class="w-100 mb-3 d-flex"></div>
    </div>
  `;
  }
  clickCard(e) {
    const cardId = e.target.dataset.id;

    const productPage = new ProductPage(this.parent, cardId);
    productPage.render();
  }

  addCopyFirst() {
    if (this.cardsData.length === 0) return;
    const first = this.cardsData[0];

    // Формирование строки из диагоналей матрицы
    const matrix = [
      ["А", "Б", "В"],
      ["Г", "Д", "Е"],
      ["Ё", " ь", "."],
    ];
    const n = matrix.length;
    const indices = Array.from({ length: n }, (_, i) => i); // коллекция
    const stateMatrix = { result: "", log: "" }; // объект + строка

    do {
      const i = indices.shift(); // индекс строки
      const j = n - 1 - i; // индекс столбца побочной диагонали
      stateMatrix.result += matrix[i][i];
      if (i !== j) {
        stateMatrix.result += matrix[i][j];
      }
      stateMatrix.log += `Обработан индекс ${i}, результат: "${stateMatrix.result}"\n`;
    } while (indices.length > 0); // опустела ли коллекция

    console.log(stateMatrix.log);
    const diagonalString = stateMatrix.result;

    //Первое решение: сравнение символов с двух сторон
    const palindrome1 = (str) => {
      if (str.length <= 1) return true;
      // объект для хранения индексов и флага
      const state = {
        left: 0,
        right: str.length - 1,
        isPalindrome: true,
      };
      do {
        if (str[state.left] !== str[state.right]) {
          state.isPalindrome = false;
          break;
        }
        state.left++;
        state.right--;
      } while (state.left < state.right); //пока индексы не пересеклись
      return state.isPalindrome;
    };

    //Второе решение: сокращение строки с двух сторон
    const palindrome2 = (str) => {
      if (str.length <= 1) return true;
      const state = {
        current: str,
        isPalindrome: true,
      };
      do {
        const first = state.current[0];
        const last = state.current[state.current.length - 1];
        if (first !== last) {
          state.isPalindrome = false;
          break;
        }
        state.current = state.current.slice(1, -1); // новая строка
      } while (state.current.length > 1);
      return state.isPalindrome;
    };

    const isPal1 = palindrome1(diagonalString);
    const isPal2 = palindrome2(diagonalString);

    //Создание копии карточки
    const newId = Date.now();
    const copy = {
      ...first,
      id: newId,
      title: `${first.title} "${diagonalString}". Проверка палиндрома - ${isPal1 && isPal2}`,
    };

    this.cardsData.push(copy);
    this.render();
  }
  // Обработчик удаления последней карточки
  removeLast() {
    if (this.cardsData.length === 0) return;
    this.cardsData.pop();
    this.render();
  }
  clickHome() {
    window.close();
  }
  render() {
    this.parent.innerHTML = "";
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    const buttonsContainer = document.getElementById("buttons-container"); // контейнер
    // Рендерим кнопку добавления и передаём обработчик addCopyFirst
    const addButton = new AddCard(buttonsContainer);
    addButton.render(this.addCopyFirst.bind(this));

    // Рендерим кнопку удаления и передаём обработчик removeLast
    const removeButton = new RemoveCard(buttonsContainer);
    removeButton.render(this.removeLast.bind(this));

    const homeButton = new HomeButton(buttonsContainer);
    homeButton.render(this.clickHome.bind(this));

    this.cardsData.forEach((item) => {
      const productCard = new ProductCardComponent(this.pageRoot);
      productCard.render(item, this.clickCard.bind(this));
    });
  }
}
