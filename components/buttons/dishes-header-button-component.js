export class DishesHeaderButtonComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML({ id, text, style = "btn-outline-light" }) {
    return `
      <button id="${id}" class="btn ${style} dishes-header-button" type="button">
        ${text}
      </button>
    `;
  }

  renderDishes(buttonConfig, listener) {
    this.parent.insertAdjacentHTML("beforeend", this.getDishesHTML(buttonConfig));
    const dishesButton = document.getElementById(buttonConfig.id);

    if (dishesButton && typeof listener === "function") {
      dishesButton.addEventListener("click", listener);
    }
  }
}
