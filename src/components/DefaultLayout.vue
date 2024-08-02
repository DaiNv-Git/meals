<script setup lang="ts">
import NavBar from './NavBar.vue';
</script>

<template>
 <div class="bg-gray-100 h-full" >
    <NavBar></NavBar>
    <main>
        <router-view/>   
    </main>
</div> 
</template>