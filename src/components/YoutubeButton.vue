<template>
    <a :href="href" target="_blank" class="px-3 py-1 rounded-xl border-2 border-red-100
                bg-red-600  transition-colors text-white hover:bg-red-100" ><slot></slot></a>
</template>

<script setup>
    const props = defineProps({
        href:String
    })
</script>

<style lang="scss" scoped>

</style>