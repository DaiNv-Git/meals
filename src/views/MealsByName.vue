<template>
    <div class="p-8 pd-0">
        <input type="text" class="rounded border-2 border-gray-200 w-full " 
        placeholder="search for name" v-model="keyWord" @change="searchMeals()">
    </div>
   
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-30 object-cover">
           <div >
            <h3  class=" py-2 font-semibold">{{meal.strMeal}}</h3>
            <p class="mb-4">Built Complete Vue 3/Vuex application in 3 hours
                Built Complete Vue 3/Vuex application in 3 hours
            </p>
        </div>
            <div class="items-center ">
                <a :href="meal.strYoutube" target="_blank" class="px-3 py-1 rounded-xl border-2 border-red-100
                bg-red-600  transition-colors text-white" >Youtobe</a>
                <!-- <router-link to="/" class="px-2 py-1 rounded-l border-2 border-red-100
               bg-purple-600 text-white transition-colors">View</router-link> -->
        </div>
           </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
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