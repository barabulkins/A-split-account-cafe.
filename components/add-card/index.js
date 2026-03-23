export class AddCard {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML() {
    return `
      <button id="add-button" class="btn btn-outline-light me-2">
        Добавить копию первой карточки
      </button>
    `;
  }

  render(listener) {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML());
    const btn = document.getElementById("add-button");
    if (btn) btn.addEventListener("click", listener);
  }
}
