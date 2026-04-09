export class DishesHomeButton {
  constructor(parent) {
    this.parent = parent;
  }

  addDishesListeners(listener) {
    document.getElementById("dishes-home-button").addEventListener("click", listener);
  }

  getDishesHTML() {
    return `
            <button id="dishes-home-button" class="btn btn-outline-light me-2" type="button">Домой</button>
        `;
  }

  renderDishes(listener) {
    const html = this.getDishesHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addDishesListeners(listener);
  }
}