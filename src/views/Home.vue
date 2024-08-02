<template>
  <div class="flex flex-col  p-8 justify-center">
    <input type="text" class="rounded border-2 border-gray-200 w-full " placeholder="search for meal">
    <div class="flex gap-2 justify-center mt-2">
        <router-link    :to="{ name: 'byLetter', params: { letter } }" v-for="letter  of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <pre>{{ intedients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axiosClient from '../axiosClient';


const store = useStore();
const meals = computed(() => store.state.meals);
const letters = 'ABCDEFJHIKLNM'.split("")
const intedients = ref([])
onMounted(async () => {
  const res = await axiosClient.get('/list.php?c=list');
  console.log(res);
  intedients.value=res.data
});
</script>

<style >
</style>
