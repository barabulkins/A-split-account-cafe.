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
}

export const dishesApi = new DishesApi();
