const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3003;
const DATA_FILE_PATH = path.join(__dirname, 'data', 'dishes.json');
const CLIENT_BUILD_PATH = path.join(__dirname, 'public-dist');
const PUBLIC_ASSETS_PATH = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
};

function readDishes() {
  try {
    const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Ошибка чтения файла:', error);
    return [];
  }
}

function writeDishes(items) {
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(items, null, 2), 'utf8');
}

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(data));
}

function sendEmpty(response, statusCode = 204) {
  response.writeHead(statusCode);
  response.end();
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    request.on('error', reject);
  });
}

function findAllDishes(searchParams) {
  let items = readDishes();
  const title = searchParams.get('title');
  const price = searchParams.get('price');

  if (title) {
    items = items.filter((item) =>
      String(item.title || '').toLowerCase().includes(String(title).toLowerCase()),
    );
  }

  if (price !== null && price !== '') {
    items = items.filter((item) => Number(item.price) === Number(price));
  }

  return items;
}

function createDish(payload) {
  const items = readDishes();
  const newId = items.length > 0 ? Math.max(...items.map((item) => Number(item.id))) + 1 : 1;
  const newItem = {
    id: newId,
    src: payload.src,
    title: payload.title,
    text: payload.text || '',
    modelPath: payload.modelPath || null,
    price: Number(payload.price),
    description: payload.description || '',
    composition: payload.composition || '',
    nutrition: payload.nutrition || '',
  };

  items.push(newItem);
  writeDishes(items);
  return newItem;
}

function updateDish(id, payload) {
  const items = readDishes();
  const index = items.findIndex((item) => Number(item.id) === Number(id));

  if (index === -1) {
    return null;
  }

  items[index] = {
    ...items[index],
    ...payload,
    id: Number(id),
    price: payload.price !== undefined ? Number(payload.price) : items[index].price,
  };

  writeDishes(items);
  return items[index];
}

function removeDish(id) {
  const items = readDishes();
  const filteredItems = items.filter((item) => Number(item.id) !== Number(id));

  if (filteredItems.length === items.length) {
    return false;
  }

  writeDishes(filteredItems);
  return true;
}

async function handleDishesApi(request, response, pathname, searchParams) {
  const parts = pathname.split('/').filter(Boolean);
  const id = parts[1] ? Number(parts[1]) : null;

  if (request.method === 'GET' && parts.length === 1) {
    sendJson(response, 200, findAllDishes(searchParams));
    return true;
  }

  if (request.method === 'GET' && parts.length === 2) {
    const item = readDishes().find((dish) => Number(dish.id) === id);
    sendJson(response, item ? 200 : 404, item || { error: 'Позиция меню не найдена' });
    return true;
  }

  if (request.method === 'POST' && parts.length === 1) {
    const payload = await readRequestBody(request);
    if (!payload.src || !payload.title || payload.price === undefined) {
      sendJson(response, 400, { error: 'Не все поля заполнены (src, title, price)' });
      return true;
    }

    sendJson(response, 201, createDish(payload));
    return true;
  }

  if (request.method === 'PATCH' && parts.length === 2) {
    const payload = await readRequestBody(request);
    const updatedItem = updateDish(id, payload);
    sendJson(response, updatedItem ? 200 : 404, updatedItem || { error: 'Позиция меню не найдена' });
    return true;
  }

  if (request.method === 'DELETE' && parts.length === 2) {
    const isRemoved = removeDish(id);
    if (!isRemoved) {
      sendJson(response, 404, { error: 'Позиция меню не найдена' });
      return true;
    }

    sendEmpty(response);
    return true;
  }

  return false;
}

function getSafeStaticPath(basePath, pathname) {
  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.normalize(path.join(basePath, requestedPath));
  return filePath.startsWith(basePath) ? filePath : null;
}

function serveStatic(response, pathname) {
  const buildPath = getSafeStaticPath(CLIENT_BUILD_PATH, pathname);
  const publicPath = getSafeStaticPath(PUBLIC_ASSETS_PATH, pathname);
  const filePath = [buildPath, publicPath].find((itemPath) => itemPath && fs.existsSync(itemPath));

  if (!filePath || fs.statSync(filePath).isDirectory()) {
    sendJson(response, 404, { error: 'Маршрут не найден' });
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  response.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    const pathname = decodeURIComponent(requestUrl.pathname);

    console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);

    if (pathname === '/dishes' || pathname.startsWith('/dishes/')) {
      const handled = await handleDishesApi(request, response, pathname, requestUrl.searchParams);
      if (handled) {
        return;
      }
    }

    if (pathname === '/menu' || pathname.startsWith('/menu/')) {
      const dishesPathname = pathname.replace(/^\/menu/, '/dishes');
      const handled = await handleDishesApi(request, response, dishesPathname, requestUrl.searchParams);
      if (handled) {
        return;
      }
    }

    serveStatic(response, pathname);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: 'Внутренняя ошибка сервера' });
  }
});

server.listen(PORT, () => {
  console.log(`Лабораторная работа 6 запущена: http://localhost:${PORT}`);
});
