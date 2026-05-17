export class DishesFormComponent {
  constructor(parent) {
    this.parent = parent;
  }

  normalizeDishesPriceValue(value) {
    const digitsOnly = String(value ?? "").replace(/[^\d]/g, "");
    return digitsOnly ? Number(digitsOnly) : null;
  }

  escapeDishesHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  getDishesHTML({ title, buttonText, dishData = {}, showSubmitButton = true }) {
    const submitButtonHTML = showSubmitButton
      ? `<button id="dishes-submit-button" class="btn btn-light" type="submit">${this.escapeDishesHtml(buttonText)}</button>`
      : "";

    return `
      <section class="dishes-form-card p-4 shadow-lg">
        <h2 class="mb-4">${this.escapeDishesHtml(title)}</h2>
        <form id="dishes-form" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="dishes-title-input">Название блюда</label>
              <input id="dishes-title-input" name="title" class="form-control" type="text" required value="${this.escapeDishesHtml(dishData.title || "")}">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="dishes-price-input">Цена</label>
              <input id="dishes-price-input" name="price" class="form-control" type="text" required value="${this.escapeDishesHtml(dishData.price || dishData.text || "")}" placeholder="Например: 1 500 ₽">
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-description-input">Описание</label>
              <textarea id="dishes-description-input" name="description" class="form-control" rows="5" required>${this.escapeDishesHtml(dishData.description || dishData.text || "")}</textarea>
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-image-input">Путь к картинке</label>
              <input id="dishes-image-input" name="src" class="form-control" type="text" required value="${this.escapeDishesHtml(dishData.src || "")}" placeholder="img/medovik.png">
            </div>
            <div class="col-12">
              <label class="form-label" for="dishes-model-input">Путь к 3D модели</label>
              <input id="dishes-model-input" name="modelPath" class="form-control" type="text" value="${this.escapeDishesHtml(dishData.modelPath || "")}" placeholder="models/medovik.glb">
            </div>
          </div>
          <div class="d-flex gap-2 mt-4 flex-wrap">
            ${submitButtonHTML}
            <button id="dishes-cancel-button" class="btn btn-outline-light" type="button">Отмена</button>
          </div>
        </form>
      </section>
    `;
  }

  getDishesFormValues() {
    const dishesForm = document.getElementById("dishes-form");
    const dishesFormData = new FormData(dishesForm);

    const dishesPrice = (dishesFormData.get("price") || "").toString().trim();
    const dishesDescription = (dishesFormData.get("description") || "").toString().trim();

    return {
      title: (dishesFormData.get("title") || "").toString().trim(),
      price: dishesPrice,
      priceValue: this.normalizeDishesPriceValue(dishesPrice),
      description: dishesDescription,
      text: dishesPrice,
      src: (dishesFormData.get("src") || "").toString().trim(),
      modelPath: (dishesFormData.get("modelPath") || "").toString().trim(),
    };
  }

  renderDishes(formConfig, onSubmit, onCancel) {
    this.parent.innerHTML = this.getDishesHTML(formConfig);

    const dishesForm = document.getElementById("dishes-form");
    const dishesCancelButton = document.getElementById("dishes-cancel-button");

    dishesForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (typeof onSubmit === "function") {
        const dishesData = this.getDishesFormValues();
        onSubmit(dishesData);
      }
    });

    if (dishesCancelButton && typeof onCancel === "function") {
      dishesCancelButton.addEventListener("click", onCancel);
    }
  }
}
