class DishesUrls {
  constructor() {
    this.baseUrl = '/dishes';
  }

  getDishes(params = {}) {
    const url = new URL(this.baseUrl, window.location.origin);

    if (params.title) {
      url.searchParams.set('title', params.title);
    }

    if (params.price !== undefined && params.price !== null && params.price !== '') {
      url.searchParams.set('price', params.price);
    }

    return `${url.pathname}${url.search}`;
  }

  getDishById(id) {
    return `${this.baseUrl}/${id}`;
  }

  createDish() {
    return this.baseUrl;
  }

  updateDishById(id) {
    return `${this.baseUrl}/${id}`;
  }

  removeDishById(id) {
    return `${this.baseUrl}/${id}`;
  }
}

export const dishesUrls = new DishesUrls();
