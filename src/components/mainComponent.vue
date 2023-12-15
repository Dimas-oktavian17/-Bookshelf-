<!-- eslint-disable indent -->
<script setup>
import { computed, ref, watch, onMounted } from 'vue'
const title = ref('')
const author = ref('')
const year = ref('')
const doneRead = ref(false)
const radiosFiltered = ref('')
const searchFilter = ref('')
const data = ref([])
const toggleDark = () => document.documentElement.classList.toggle('dark')
watch(data, (newValue) => {
    localStorage.setItem('todos', JSON.stringify(newValue))
}, {
    deep: true,
})
const saveItem = () => {
    const newData = [...data.value, {
        id: data.value.length + 1,
        judul: title.value,
        penulis: author.value,
        tahun: Number(year.value),
        reading: doneRead.value
    }]
    data.value = newData
    title.value = ''
    author.value = ''
    year.value = ''

}
const searchBook = computed(() => {
    let result = data.value.toReversed().filter(book => {
        if (radiosFiltered.value === 'true' && book.reading !== true) return false
        if (radiosFiltered.value === 'false' && book.reading !== false) return false
        if (searchFilter.value && !book.judul.toLowerCase().includes(searchFilter.value.toLowerCase())) return false
        return true
    })
    return result
})
const deleteBook = (id) => data.value = data.value.filter(book => book.id !== id)
const changeStatus = (id) => {
    const book = data.value.find(book => book.id === id)
    // Toggle the reading status
    return book.reading = !book.reading
}
onMounted(() => data.value = JSON.parse(localStorage.getItem('todos')) || [])
const handleRadios = (filter) => radiosFiltered.value = filter
const handleSearch = (search) => searchFilter.value = search
</script>

<template>
    <main>
        <section class="flex flex-col items-center justify-center">
            <div
                class="container max-w-sm p-4 my-16 bg-white border rounded-lg border-white/60 shadow-m sm:p-6 lg:p-8 dark:bg-main-bg dark:border-secondary-bg">
                <!-- Darkmode -->
                <darkMode @darkmode="toggleDark" title="darkmode" />
                <form @submit.prevent="saveItem" class="space-y-6 ">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-main-text">
                        Bookshelf
                    </h5>
                    <div
                        class="flex flex-col flex-wrap items-start justify-center lg:flex-row lg:items-center lg:justify-between">
                        <!-- title -->
                        <div class="lg:w-[45%] w-full ">
                            <labelComponent labelFor="title" title="Title"
                                styleLabel="block mb-2 text-sm font-medium text-main-bg dark:text-main-text" />
                            <inputComponent required v-model.trim="title" typeInput="text" nameInput="title"
                                placeholderInput="Succes as Intp" styleInput="form-input" />
                        </div>
                        <!-- author -->
                        <div class="lg:w-[45%] w-full my-4 lg:my-0">
                            <labelComponent labelFor="author" title="Author"
                                styleLabel="block mb-2 text-sm font-medium text-main-bg dark:text-main-text" />
                            <div class="relative">
                                <inputComponent required v-model.trim="author" typeInput="text" nameInput="author"
                                    placeholderInput="Oktaa" styleInput="form-input" />
                            </div>
                        </div>
                        <!-- since year -->
                        <div class="w-full lg:mt-4">
                            <labelComponent labelFor="year" title="Since year"
                                styleLabel="block mb-2 text-sm font-medium text-main-bg dark:text-main-text" />
                            <div class="relative">
                                <inputComponent required v-model="year" typeInput="number" nameInput="year"
                                    placeholderInput="2004" styleInput="form-input" />
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center ps-4">
                        <inputComponent v-model="doneRead" typeInput="checkbox" styleInput="w-4 h-4 accent-primary" />
                        <labelComponent labelFor="bordered-checkbox" title="Done Read'it!"
                            styleLabel="text-main-bg/60 text-sm block w-full p-2.5  dark:text-main-text/60" />
                    </div>
                    <buttonComponent title="Register books!" />
                </form>
            </div>

        </section>
        <!-- Search fiture -->
        <section aria-label="searchWrapper" class="container flex flex-col items-center justify-center max-w-sm p-4 my-16 ">
            <!-- all -->
            <!-- search -->
            <labelComponent styleLabel="block  mb-2 text-lg font-medium text-main-bg dark:text-main-text" labelFor="search"
                title="Search your books!" />
            <inputComponent @update:modelValue="handleSearch" typeInput="text" nameInput="search"
                placeholderInput="Atomic habbits" styleInput="form-input mb-4" />
            <FilterRadios @filter="handleRadios" />
            <ul v-auto-animate>
                <template v-for="({ judul, penulis, tahun, reading, id }) in  searchBook " :key="id">
                    <li v-if="reading" class="mb-4 flex flex-row items-center bg-white border border-main-bg text-main-bg text-sm 
                            rounded-lg focus:ring-secondary-bg dark:focus:border-secondary-bg 
                            w-full p-2.5 dark:bg-secondary-bg dark:border-secondary-bg 
                             dark:text-main-text">
                        <div class="text-lg">
                            <header class="text-green-700">Sudah dibaca!</header>

                            {{ judul }} - {{ penulis }} - {{ tahun }}
                        </div>
                        <span class="mx-2">|</span>
                        <div class="flex flex-row items-center">
                            <button @click="deleteBook(id)" class="transition-all group">
                                <IconVue class="mr-1 text-base group-hover:rotate-6 group-hover:opacity-90"
                                    icon="bi:x-circle" />
                            </button>
                            <button @click="changeStatus(id)" class="transition-all group">
                                <IconVue class="text-base group-hover:rotate-6 group-hover:opacity-90" icon="bi:ban" />
                            </button>

                        </div>
                    </li>
                    <li v-else class="mb-4 flex flex-row items-center bg-white border border-main-bg text-main-bg text-sm 
                            rounded-lg focus:ring-secondary-bg dark:focus:border-secondary-bg 
                            w-full p-2.5 dark:bg-secondary-bg dark:border-secondary-bg 
                             dark:text-main-text">
                        <div class="text-lg">
                            <header class="text-red-700">Belum dibaca!</header>
                            {{ judul }} - {{ penulis }} - {{ tahun }}
                        </div>
                        <span class="mx-2">|</span>
                        <div class="flex flex-row items-center">
                            <button @click="deleteBook(id)" class="transition-all group">
                                <IconVue class="mr-1 text-base group-hover:rotate-6 group-hover:opacity-90"
                                    icon="bi:x-circle" />
                            </button>
                            <button @click="changeStatus(id)" class="transition-all group">
                                <IconVue class="text-base group-hover:rotate-6 group-hover:opacity-90"
                                    icon="bi:check-circle" />
                            </button>
                        </div>
                    </li>
                </template>
            </ul>
        </section>

    </main>
</template>
