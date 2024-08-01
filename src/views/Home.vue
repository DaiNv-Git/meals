<template>
  <div class="flex flex-col  p-8 justify-center">
    <input type="text" class="rounded border-2 border-gray-200 w-full " placeholder="search for meal">
    <div class="flex gap-2 justify-center mt-2">
        <router-link    :to="{ name: 'byLetter', params: { letter } }" v-for="letter  of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const meals = computed(() => store.state.meals);
const letters = 'ABCDEFJHIKLNM'.split("")
</script>

<style >
</style>
