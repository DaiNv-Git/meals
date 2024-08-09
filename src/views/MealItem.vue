<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{name:'mealDeails',params:{id:meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-30 object-cover">
       <div >
        <h3  class=" py-2 font-semibold">{{meal.strMeal}}</h3>
        <p class="mb-4">Built Complete Vue 3/Vuex application in 3 hours
            Built Complete Vue 3/Vuex application in 3 hours
        </p>
    </div>
</router-link>
        <div class="flex items-center justify-between">
           <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            <!-- <router-link to="/" class="px-2 py-1 rounded-l border-2 border-red-100
           bg-purple-600 text-white transition-colors">View</router-link> -->
    </div>
       </div>
</template>

<script setup>
const {meal} = defineProps({
    required:true,
    meal:Object
})
</script>

<style lang="scss" scoped>

</style>