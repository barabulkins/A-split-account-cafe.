export class DishesHomeButton {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML() {
    return `
      <button id="dishes-home-button" class="btn btn-outline-light me-2" type="button">Домой</button>
    `;
  }

  renderDishes(listener) {
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML());
    const button = document.getElementById('dishes-home-button');
    if (button) {
      button.addEventListener('click', listener);
    }
  }
}
