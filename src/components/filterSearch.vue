<script setup>
const emit = defineEmits(['cari'])
const search = (e) => {
    emit('cari', e.target.value)
}
</script>


<template>
    <labelComponent styleLabel="block  mb-2 text-lg font-medium text-main-bg dark:text-main-text" labelFor="search"
        title="Search your books!" />
    <inputComponentinput inop typeInput="text" nameInput="search" placeholderInput="Atomic habbits"
        styleInput="form-input mb-4" />
</template>
