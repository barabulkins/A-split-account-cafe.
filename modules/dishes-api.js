import { dishesAjax } from "./dishes-ajax.js";
import { dishesUrls } from "./dishes-urls.js";

class DishesApi {
  getDishes(searchValue, callback) {
    dishesAjax.get(dishesUrls.getDishes(searchValue), callback);
  }

  getDishById(id, callback) {
    dishesAjax.get(dishesUrls.getDishById(id), callback);
  }

  createDish(dishData, callback) {
    dishesAjax.post(dishesUrls.createDish(), dishData, callback);
  }

  updateDish(id, dishData, callback) {
    dishesAjax.patch(dishesUrls.updateDishById(id), dishData, callback);
  }

  deleteDish(id, callback) {
    dishesAjax.delete(dishesUrls.removeDishById(id), callback);
  }
}

export const dishesApi = new DishesApi();
