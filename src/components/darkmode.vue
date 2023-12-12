<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(['title'])
defineEmits(['darkmode'])
</script>
<template>
    <label for="default-toggle" class="relative inline-flex items-center cursor-pointer">
        <input @click="$emit('darkmode')" type="checkbox" value="" id="default-toggle" class="sr-only peer">
        <div
            class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
        </div>
        <span class="ml-3 text-sm font-medium text-main-bg dark:text-main-text">
            {{ title }}
        </span>
    </label>
</template>
