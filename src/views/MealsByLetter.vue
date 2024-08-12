<template>
    <div>
        <input type="text" class="rounded border-2 border-gray-200 w-full " placeholder="search for meal">
    <div class="flex gap-2 justify-center mt-2">
        <router-link    :to="{ name: 'byLetter', params: { letter } }" v-for="letter  of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
  
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
     </div>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from './MealItem.vue';
import YoutubeButton from '../components/YoutubeButton.vue';

const route= useRoute();
const letters = 'ABCDEFJHIKLNM'.split("")
const meals =computed(()=>store.state.mealsByLetter )
onMounted(()=>{
    store.dispatch('searchMealByLetter',route.params.letter?'A':'')
})
watch(route,()=>{
    store.dispatch('searchMealByLetter',route.params.letter)
})
</script>

<style  scoped>

</style>