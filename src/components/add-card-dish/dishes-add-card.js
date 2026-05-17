export class DishesAddCard {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML() {
    return `
      <button id="dishes-add-button" class="btn btn-outline-light me-2">
        Добавить карточку
      </button>
    `;
  }

  renderDishes(listener) {
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML());
    const button = document.getElementById('dishes-add-button');
    if (button) {
      button.addEventListener('click', listener);
    }
  }
}
