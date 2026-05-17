import { DishesMainPage } from "./pages/main-menu/dishes-main-page.js?v=3";

const dishesRoot = document.getElementById("root");
const dishesMainPage = new DishesMainPage(dishesRoot);
dishesMainPage.renderDishes();
