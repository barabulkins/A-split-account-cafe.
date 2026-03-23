export class ProductCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
            <div class="card bg-transparent" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body" style="border: 1px solid #fffefe">
                    <h5 class="card-title" style="color: rgb(255, 255, 255);">${data.title}</h5>
                    <p class="card-text" style="color: rgb(255, 255, 255);">${data.text}</p>
                    <button class="btn btn-outline-light me-2" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                </div>
            </div>
            `;
  }

  addListeners(data, listener) {
    document
      .getElementById(`click-card-${data.id}`)
      .addEventListener("click", listener);
  }

  render(data, listener) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(data, listener);
  }
}
