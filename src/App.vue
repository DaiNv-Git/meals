<script setup>
import { RouterView } from 'vue-router';

</script>


<template>
    <div class="bg-gray-100 h-full" >
    <head class="bg-white shadow h-16 flex justify-between  items-stretch">
        <router-link :to="{name:'home'}" class="inline-flex items-center h-full  px-5">Home </router-link>
        <div class="flex items-center gap-1">
           <router-link :to="{name:'byName'}" class="inline-block items-center px-2 h-full transcition-colors hover:bg-purple-100"> Search meals</router-link>
           <router-link :to="{name:'byLetter'}" class="inline-block items-center px-2 h-full transcition-colors hover:bg-purple-100">  Meals by letters</router-link>
           <router-link :to="{name:'byIngredient'}" class="inline-block items-center px-2 h-full transcition-colors hover:bg-purple-100"> Meals by Ingredients</router-link>
        </div>
    </head>
    <main>
        <router-view/>
       
    </main>
</div>
</template>

<style scoped>

</style>
