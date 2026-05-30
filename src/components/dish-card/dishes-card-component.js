import { escapeHtml } from '../../modules/dishes-normalize.js';

export class DishesCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML(data) {
    return `
      <article class="dishes-card h-100">
        <img src="${escapeHtml(data.src)}" alt="${escapeHtml(data.title)}" onerror="this.onerror=null;this.src='/img/default-dish.svg';">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${escapeHtml(data.title)}</h5>
          <p class="card-text dishes-price mb-3">${escapeHtml(data.cardText)}</p>
          <div class="dishes-card-actions mt-auto">
            <button class="btn btn-outline-light" id="dishes-click-card-${data.id}" data-id="${data.id}" type="button">Подробнее</button>
            <button class="btn btn-outline-light" id="dishes-edit-card-${data.id}" data-id="${data.id}" type="button">Редактировать</button>
            <button class="btn btn-outline-light" id="dishes-delete-card-${data.id}" data-id="${data.id}" type="button">Удалить</button>
          </div>
        </div>
      </article>
    `;
  }

  renderDishes(data, onDetails, onEdit, onDelete) {
    const wrapper = document.createElement('div');
    wrapper.className = 'h-100';
    wrapper.innerHTML = this.getDishesHTML(data);
    this.parent.appendChild(wrapper);

    const detailsButton = document.getElementById(`dishes-click-card-${data.id}`);
    const editButton = document.getElementById(`dishes-edit-card-${data.id}`);
    const deleteButton = document.getElementById(`dishes-delete-card-${data.id}`);

    if (detailsButton && typeof onDetails === 'function') {
      detailsButton.addEventListener('click', onDetails);
    }

    if (editButton && typeof onEdit === 'function') {
      editButton.addEventListener('click', onEdit);
    }

    if (deleteButton && typeof onDelete === 'function') {
      deleteButton.addEventListener('click', onDelete);
    }
  }
}
