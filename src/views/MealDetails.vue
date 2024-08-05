<template>
    <div class="max-w-[800px] mx-auto">
           <h1 class="text-5xl font-blod mb-5">{{meal.strMeal}}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div  class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
           <div>
            <strong class="front-bold">Category : {{ meal.strCategory }}</strong>   
           </div>
           <div >
            <strong class="front-bold">Area : {{ meal.strArea }}</strong>   
           </div>
           <div >
            <strong class="front-bold">Tags : {{ meal.strTags }}</strong>          
           </div>
        </div>
        <div class="my-3">{{meal.strInstrucions}}</div>
        <div class="grid gird-cols-1 md:grid-cols-2 p-8">
            <div>
                <h2 class="text-2xl font-semibold sm-2">Ingredients</h2>
                <ul>
                    <template  v-for="(el,ind) of new Array(10)">
                        <li v-if="meal[`strIngredient${ind+1}`]">
                          {{ ind+1 }} :  {{ meal[`strIngredient${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold sm-2">Measures</h2>
                <ul>
                    <template  v-for="(el,ind) of new Array(10)">
                        <li v-if="meal[`strMeasure${ind+1}`]">
                          {{ ind+1 }} :  {{ meal[`strMeasure${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube">Go to youtube</YoutubeButton>
                <a :href="meal.strInstrucions" target="_blank" class="px-3 py-1 rounded-xl border-2 border-indigo-100
                bg-indigo-600  transition-colors text-white hover:bg-indigo-200" >View original source</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import {  onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
     const route = useRoute();
     const meal = ref([])
    onMounted (()=>{
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data})=>{        
        meal.value= data.meals[0];
    })
})

</script>

<style lang="scss" scoped>

</style>