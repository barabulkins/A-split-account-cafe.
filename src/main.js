import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/dishes.css';
import { DishesMainPage } from './pages/main-menu/dishes-main-page.js';

const root = document.getElementById('root');
const mainPage = new DishesMainPage(root);
mainPage.renderDishes();
