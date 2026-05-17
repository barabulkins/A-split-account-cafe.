class DishesUrls {
  constructor() {
    this.baseUrl = "http://localhost:3000";
    this.dishesResource = "dishes";
  }

  normalizeDishesPriceValue(value) {
    const digitsOnly = String(value ?? "").replace(/[^\d]/g, "");
    return digitsOnly ? Number(digitsOnly) : null;
  }

  getDishes(searchValue = "") {
    const dishesUrl = new URL(`${this.baseUrl}/${this.dishesResource}`);
    const normalizedPriceValue = this.normalizeDishesPriceValue(searchValue);

    if (normalizedPriceValue !== null) {
      dishesUrl.searchParams.set("priceValue", String(normalizedPriceValue));
    }

    return dishesUrl.toString();
  }

  getDishById(id) {
    return `${this.baseUrl}/${this.dishesResource}/${id}`;
  }

  createDish() {
    return `${this.baseUrl}/${this.dishesResource}`;
  }

  updateDishById(id) {
    return `${this.baseUrl}/${this.dishesResource}/${id}`;
  }

  removeDishById(id) {
    return `${this.baseUrl}/${this.dishesResource}/${id}`;
  }
}

export const dishesUrls = new DishesUrls();
