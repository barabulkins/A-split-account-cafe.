export class HomeButton {
  constructor(parent) {
    this.parent = parent;
  }

  addListeners(listener) {
    document.getElementById("home-button").addEventListener("click", listener);
  }

  getHTML() {
    return `
            <button id="home-button" class="btn btn-outline-light me-2" type="button">Домой</button>
        `;
  }

  render(listener) {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(listener);
  }
}
