import { dishesUrls } from './dishes-urls.js';

class DishesApi {
  async request(url, options = {}) {
    const response = await fetch(url, options);
    const responseText = await response.text();

    let data = null;
    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch (error) {
        data = responseText;
      }
    }

    return {
      data,
      status: response.status,
      ok: response.ok,
    };
  }

  get(url) {
    return this.request(url, { method: 'GET' });
  }

  post(url, data) {
    return this.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  patch(url, data) {
    return this.request(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  delete(url) {
    return this.request(url, { method: 'DELETE' });
  }

  getDishes(params = {}) {
    return this.get(dishesUrls.getDishes(params));
  }

  getDishById(id) {
    return this.get(dishesUrls.getDishById(id));
  }

  createDish(data) {
    return this.post(dishesUrls.createDish(), data);
  }

  updateDish(id, data) {
    return this.patch(dishesUrls.updateDishById(id), data);
  }

  deleteDish(id) {
    return this.delete(dishesUrls.removeDishById(id));
  }
}

export const dishesApi = new DishesApi();
