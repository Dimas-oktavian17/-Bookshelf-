<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps([
    'modelValue',
    'nameInput', 'placeholderInput'
    , 'typeInput',
    'styleInput'
])
defineEmits([
    'update:modelValue',
])

const { modelValue, nameInput, placeholderInput, typeInput, styleInput } = toRefs(props)
const inputEvent = computed(() => typeInput.value === 'checkbox' ? 'change' : 'input')
const inputValue = computed(() => typeInput.value === 'checkbox' ? 'checked' : 'value')
</script>

<template>
    <input :[inputValue]="modelValue" :type="typeInput" :name="nameInput" :placeholder="placeholderInput"
        :class="styleInput" @[inputEvent]="$emit('update:modelValue', $event.target[inputValue])" />
</template>
