export class RemoveCard {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML() {
    return `
      <button id="remove-button" class="btn btn-outline-light me-2">
        Удалить последнюю карточку
      </button>
    `;
  }

  render(listener) {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML());
    const btn = document.getElementById("remove-button");
    if (btn) btn.addEventListener("click", listener);
  }
}
