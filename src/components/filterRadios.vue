<script setup>
const emit = defineEmits(['filter'])
const filter = (e) => emit('filter', e.target.value)
</script>


<template>
    <div class="flex flex-row text-main-text">
        <h1>Filter by:</h1>
        <div class="mx-1">
            <input type="radio" name="show" value="all" checked @change="filter">
            <label class="text-white">All</label>
        </div>
        <div class="mx-1">
            <input type="radio" name="show" value="true" @change="filter">
            <label class="text-white">Done</label>
        </div>
        <div class="mx-1">
            <input type="radio" name="show" value="false" @change="filter">
            <label class="text-white">Not Done</label>
        </div>
    </div>
</template>
