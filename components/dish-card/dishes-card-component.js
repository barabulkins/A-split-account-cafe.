export class DishesCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  escapeDishesHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  getDishesImageSource(dishesItem) {
    return dishesItem.src || "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27400%27 height=%27280%27 viewBox=%270 0 400 280%27%3E%3Crect width=%27400%27 height=%27280%27 fill=%27%23d9d9d9%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2724%27 text-anchor=%27middle%27 fill=%27%23666%27 dy=%27.3em%27%3EDishes%3C/text%3E%3C/svg%3E";
  }

  getDishesCardPrice(dishesItem) {
    return dishesItem.price || dishesItem.text || "Цена не указана";
  }

  getDishesHTML(dishesItem) {
    return `
      <article class="dishes-card h-100">
        <img src="${this.getDishesImageSource(dishesItem)}" alt="${this.escapeDishesHtml(dishesItem.title || "Блюдо")}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${this.escapeDishesHtml(dishesItem.title || "Без названия")}</h5>
          <p class="card-text dishes-price mb-3">${this.escapeDishesHtml(this.getDishesCardPrice(dishesItem))}</p>
          <div class="dishes-card-actions mt-auto">
            <button
              class="btn btn-outline-light"
              id="dishes-open-card-${dishesItem.id}"
              data-id="${dishesItem.id}"
              type="button"
            >
              Подробнее
            </button>
            <button
              class="btn btn-outline-light"
              id="dishes-delete-card-${dishesItem.id}"
              data-id="${dishesItem.id}"
              type="button"
            >
              Удалить
            </button>
          </div>
        </div>
      </article>
    `;
  }

  addDishesListeners(dishesItem, onOpen, onDelete) {
    const dishesOpenButton = document.getElementById(`dishes-open-card-${dishesItem.id}`);
    const dishesDeleteButton = document.getElementById(`dishes-delete-card-${dishesItem.id}`);

    if (dishesOpenButton && typeof onOpen === "function") {
      dishesOpenButton.addEventListener("click", onOpen);
    }

    if (dishesDeleteButton && typeof onDelete === "function") {
      dishesDeleteButton.addEventListener("click", onDelete);
    }
  }

  renderDishes(dishesItem, onOpen, onDelete) {
    const dishesWrapper = document.createElement("div");
    dishesWrapper.className = "h-100";
    dishesWrapper.innerHTML = this.getDishesHTML(dishesItem);
    this.parent.appendChild(dishesWrapper);
    this.addDishesListeners(dishesItem, onOpen, onDelete);
  }
}
