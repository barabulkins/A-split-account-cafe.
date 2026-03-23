export class ButtonComponent {
  constructor(parent) {
    this.parent = parent;
  }

  render() {
    this.parent.insertAdjacentHTML(
      "beforeend",
      '<button type="button" class="btn btn-outline-light me-2">Hello world 4!</button>',
    );
  }
}
