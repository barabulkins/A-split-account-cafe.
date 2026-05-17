import { DishesMainPage } from './pages/main-menu/dishes-main-page.js';

const root = document.getElementById('root');
const mainPage = new DishesMainPage(root);
mainPage.renderDishes();
