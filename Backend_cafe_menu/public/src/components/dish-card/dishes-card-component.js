export class DishesCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML(data) {
    return `
      <div class="card bg-transparent" style="width: 300px;">
        <img class="card-img-top" src="${data.src}" alt="картинка" onerror="this.onerror=null;this.src='/img/default-dish.svg';">
        <div class="card-body" style="border: 1px solid #fffefe">
          <h5 class="card-title" style="color: rgb(255, 255, 255);">${data.title}</h5>
          <p class="card-text" style="color: rgb(255, 255, 255);">${data.cardText}</p>
          <div class="dishes-card-actions">
            <button class="btn btn-outline-light me-2" id="dishes-click-card-${data.id}" data-id="${data.id}">Подробнее</button>
          </div>
        </div>
      </div>
    `;
  }

  renderDishes(data, onDetails) {
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML(data));

    const detailsButton = document.getElementById(`dishes-click-card-${data.id}`);

    if (detailsButton) {
      detailsButton.addEventListener('click', onDetails);
    }

  }
}
