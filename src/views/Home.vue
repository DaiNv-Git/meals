<template>
  <div class="flex flex-col  p-8 justify-center">
    
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axiosClient from '../axiosClient';


const store = useStore();
const meals = computed(() => store.state.meals);

const intedients = ref([])
onMounted(async () => {
  const res = await axiosClient.get('/list.php?c=list');
  console.log(res);
  intedients.value=res.data
});
</script>

<style >
</style>
