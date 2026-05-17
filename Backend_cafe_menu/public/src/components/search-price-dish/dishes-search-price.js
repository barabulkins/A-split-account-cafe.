export class DishesSearchPrice {
  constructor(parent) {
    this.parent = parent;
  }

  getDishesHTML(currentValue = '') {
    return `
      <div class="d-flex gap-2 flex-wrap align-items-center dishes-search-wrapper">
        <input
          id="dishes-search-price-input"
          class="form-control dishes-search-input"
          type="number"
          min="0"
          step="1"
          placeholder="Поиск по цене"
          value="${currentValue}"
        >
        <button id="dishes-search-price-button" class="btn btn-outline-light" type="button">Найти по цене</button>
        <button id="dishes-search-reset-button" class="btn btn-outline-light" type="button">Сбросить поиск</button>
      </div>
    `;
  }

  renderDishes(onSearch, onReset, currentValue = '') {
    this.parent.insertAdjacentHTML('beforeend', this.getDishesHTML(currentValue));

    const input = document.getElementById('dishes-search-price-input');
    const searchButton = document.getElementById('dishes-search-price-button');
    const resetButton = document.getElementById('dishes-search-reset-button');

    if (searchButton) {
      searchButton.addEventListener('click', () => onSearch(input ? input.value : ''));
    }

    if (input) {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          onSearch(input.value);
        }
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', onReset);
    }
  }
}
