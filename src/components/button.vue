<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
    title: {
        type: String,
    }
})
</script>

<template>
    <button
        class="w-full text-white bg-primary hover:bg-primary/60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300">
        {{ title }}
    </button>
</template>
