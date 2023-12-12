<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(['labelFor', 'title', 'styleLabel'])
</script>

<template>
    <label :for="labelFor" :class="styleLabel">
        {{ title }}
    </label>
</template>
