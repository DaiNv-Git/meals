<template>
    <div class="p-8 pd-0">
        <input type="text" class="rounded border-2 border-gray-200 w-full " 
        placeholder="search for name" v-model="keyWord" @change="searchMeals()">
    </div>
   
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';
import MealItem from './MealItem.vue';
const meals = computed(()=> store.state.searchedMeals)
const keyWord = ref('');
 function searchMeals (){
   store.dispatch('searchMeals',keyWord.value)
}
const route = useRoute();
onMounted (()=>{
    keyWord.value=route.params.name
    if(keyWord.value){
        searchMeals()
    }
})
</script>

<style  scoped>
   
</style>