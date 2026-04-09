export class DishesBackButton {
  constructor(parent) {
    this.parent = parent;
  }

  addDishesListeners(listener) {
    document.getElementById("dishes-back-button").addEventListener("click", listener);
  }

  getDishesHTML() {
    return `
                <button id="dishes-back-button" class="btn btn-outline-light me-2" type="button">Домой</button>
            `;
  }

  renderDishes(listener) {
    const html = this.getDishesHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addDishesListeners(listener);
  }
}