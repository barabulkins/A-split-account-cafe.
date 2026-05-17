class DishesAjax {
  get(url, callback) {
    const dishesXhr = new XMLHttpRequest();
    dishesXhr.open("GET", url);
    dishesXhr.send();

    dishesXhr.onreadystatechange = () => {
      if (dishesXhr.readyState === 4) {
        this.handleDishesResponse(dishesXhr, callback);
      }
    };
  }

  post(url, data, callback) {
    const dishesXhr = new XMLHttpRequest();
    dishesXhr.open("POST", url);
    dishesXhr.setRequestHeader("Content-Type", "application/json");
    dishesXhr.send(JSON.stringify(data));

    dishesXhr.onreadystatechange = () => {
      if (dishesXhr.readyState === 4) {
        this.handleDishesResponse(dishesXhr, callback);
      }
    };
  }

  patch(url, data, callback) {
    const dishesXhr = new XMLHttpRequest();
    dishesXhr.open("PATCH", url);
    dishesXhr.setRequestHeader("Content-Type", "application/json");
    dishesXhr.send(JSON.stringify(data));

    dishesXhr.onreadystatechange = () => {
      if (dishesXhr.readyState === 4) {
        this.handleDishesResponse(dishesXhr, callback);
      }
    };
  }

  delete(url, callback) {
    const dishesXhr = new XMLHttpRequest();
    dishesXhr.open("DELETE", url);
    dishesXhr.send();

    dishesXhr.onreadystatechange = () => {
      if (dishesXhr.readyState === 4) {
        this.handleDishesResponse(dishesXhr, callback);
      }
    };
  }

  handleDishesResponse(dishesXhr, callback) {
    let dishesData = null;

    try {
      dishesData = dishesXhr.responseText ? JSON.parse(dishesXhr.responseText) : null;
    } catch (error) {
      console.error("Ошибка парсинга JSON:", error);
    }

    callback(dishesData, dishesXhr.status, dishesXhr);
  }
}

export const dishesAjax = new DishesAjax();
