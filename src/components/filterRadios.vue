<script setup>
const emit = defineEmits(['filter'])

function filter(e) {
    emit('filter', e.target.value)
}
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
    <!-- <label class="flex items-center mr-4 flex-nowrap">
        <input type="radio" name="show" value="all" checked @change="filter">
        <span class="ml-1 whitespace-nowrap">Show All</span>
    </label>
    <label class="flex items-center mr-4 flex-nowrap">
        <input type="radio" name="show" value="done" @change="filter">
        <label class="ml-1 whitespace-nowrap">Done</label>
    </label>
    <label class="flex items-center mr-4 flex-nowrap">
        <input type="radio" name="show" value="notDone" @change="filter">
        <label class="ml-1 whitespace-nowrap">Past Due</label>
    </label> -->
</template>
