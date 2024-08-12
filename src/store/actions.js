import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient
    .get(`/search.php?s=${keyword}`)
    .then((response) => {
      const meals = response.data.meals;
      commit("setSearchedMeals", meals);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function searchMealByLetter({ commit }, letter) {
  axiosClient
    .get(`search.php?s=${letter}`)
    .then((response) => {
      const meals = response.data.meals;
      commit("setMealsByLetter", meals);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function searchMealsByIngredient({ commit }, keyword) {
  axiosClient
    .get(`/filter.php?i=${keyword}`)
    .then((response) => {
      const meals = response.data.meals;
      commit("setMealsByIngredient", meals);
    })
    .catch((error) => {
      console.error(error);
    });
}
