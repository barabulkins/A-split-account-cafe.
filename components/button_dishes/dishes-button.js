export class DishesButtonComponent {
  constructor(parent) {
    this.parent = parent;
  }

  renderDishes() {
    this.parent.insertAdjacentHTML(
      "beforeend",
      '<button type="button" class="btn btn-outline-light me-2">Hello world 4!</button>',
    );
  }
}