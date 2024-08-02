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
