const DEFAULT_IMAGE = '/img/default-dish.svg';

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function parseDishPrice(value) {
  if (value === undefined || value === null || value === '') {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  const numericValue = String(value).replace(/[^\d.,-]/g, '').replace(',', '.');
  const parsedValue = Number(numericValue);
  return Number.isNaN(parsedValue) ? 0 : parsedValue;
}

export function buildDishCardText(price) {
  return `${Number(price || 0).toLocaleString('ru-RU')} ₽`;
}

export function buildDishDetailsHtml(item) {
  return `
    <h6>Описание:</h6>
    <div class="dishes-description-block">${escapeHtml(item.description || 'Описание отсутствует')}</div>
    <h6 class="mt-3">Состав:</h6>
    <div class="dishes-description-block">${escapeHtml(item.composition || 'Состав не указан')}</div>
    <h6 class="mt-3">На 100 г:</h6>
    <div class="dishes-description-block">${escapeHtml(item.nutrition || 'Пищевая ценность не указана')}</div>
    <h6 class="mt-3">Цена:</h6>
    <div class="dishes-description-block">${escapeHtml(item.cardText)}</div>
  `;
}

export function normalizeDish(item = {}) {
  const price = parseDishPrice(item.price ?? item.text);
  const cardText = buildDishCardText(price);

  return {
    id: item.id,
    src: item.src || DEFAULT_IMAGE,
    title: item.title || 'Без названия',
    price,
    cardText,
    description: item.description || '',
    composition: item.composition || '',
    nutrition: item.nutrition || '',
    detailsHtml: buildDishDetailsHtml({
      description: item.description || '',
      composition: item.composition || '',
      nutrition: item.nutrition || '',
      cardText,
    }),
    modelPath: item.modelPath || null,
  };
}

export function buildDishPayload(formData) {
  const price = parseDishPrice(formData.price);

  return {
    title: formData.title.trim(),
    price,
    text: buildDishCardText(price),
    src: formData.src.trim() || DEFAULT_IMAGE,
    modelPath: formData.modelPath.trim() || null,
    description: formData.description.trim(),
    composition: formData.composition.trim(),
    nutrition: formData.nutrition.trim(),
  };
}
