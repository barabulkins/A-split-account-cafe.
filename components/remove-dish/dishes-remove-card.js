export class DishesRemoveCard {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML() {
    return `
      <button id="dishes-remove-button" class="btn btn-outline-light me-2">
        Удалить последнюю карточку
      </button>
    `;
  }

  renderDishes(listener) {
    this.parent.insertAdjacentHTML("beforeend", this.getDishesHTML());
    const btn = document.getElementById("dishes-remove-button");
    if (btn) btn.addEventListener("click", listener);
  }
}