export class DishesCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML(data) {
    return `
            <div class="card bg-transparent" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body" style="border: 1px solid #fffefe">
                    <h5 class="card-title" style="color: rgb(255, 255, 255);">${data.title}</h5>
                    <p class="card-text" style="color: rgb(255, 255, 255);">${data.text}</p>
                    <button class="btn btn-outline-light me-2" id="dishes-click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                </div>
            </div>
            `;
  }

  addDishesListeners(data, listener) {
    document
      .getElementById(`dishes-click-card-${data.id}`)
      .addEventListener("click", listener);
  }

  renderDishes(data, listener) {
    const html = this.getDishesHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addDishesListeners(data, listener);
  }
}