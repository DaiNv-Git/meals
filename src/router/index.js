import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealList,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealsByName,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsByLetter,
  },
  {
    path: "/by-ingredients/:ingredient?",
    name: "byIngredient",
    component: MealsByIngredients,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
