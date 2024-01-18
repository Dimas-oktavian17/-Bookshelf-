<script setup>
import { storeToRefs } from 'pinia'
import { useTodos } from '../stores/todos'
// end pinia store
// init pinia store
const todosStore = useTodos()
const { filter } = storeToRefs(todosStore)
</script>


<template>
    <div class="flex flex-row text-main-text">
        <h1>Filter by:</h1>
        <div class="mx-1">
            <input type="radio" value="all" v-model="filter">
            <label class="text-white">All</label>
        </div>
        <div class="mx-1">
            <input type="radio" value="true" v-model="filter">
            <label class="text-white">Done</label>
        </div>
        <div class="mx-1">
            <input type="radio" value="false" v-model="filter">
            <label class="text-white">Not Done</label>
        </div>
    </div>
</template>
