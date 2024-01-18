<!-- eslint-disable indent -->
<script setup>
// pinia store
import { storeToRefs } from 'pinia'
import { useTodos } from '../stores/todos'
// end pinia store
import { ref, } from 'vue'
// init pinia store
const todosStore = useTodos()
const { filterTodos, searchFilter, } = storeToRefs(todosStore)
// end init pinia store
// data store
const title = ref('')
const author = ref('')
const year = ref(null)
const doneRead = ref(false)
function addTodos() {
    if (!title.value && author.value && year.value && doneRead.value) {
        return
    }
    // Storing data to pinia
    todosStore.addTodos(title.value, author.value, Number(year.value), doneRead.value)
    title.value = ''
    author.value = ''
    year.value = ''
    doneRead.value = false
}

const toggleDark = () => document.documentElement.classList.toggle('dark')
function deleteBook(id) {
    todosStore.deleteBook(id)
}
function changeStatus(id) {
    todosStore.changeStatus(id)
}
// onMounted(()data.value => JSON.parse(localStorage.getItem('todosPinia')) || [])
// eslint-disable-next-line no-unused-vars
function handleSearch() {
    todosStore.handleSearch(searchFilter.value)
}
</script>

<template>
    <main>
        <section class="flex flex-col items-center justify-center">
            <div
                class="container max-w-sm p-4 my-16 bg-white border rounded-lg border-white/60 shadow-m sm:p-6 lg:p-8 dark:bg-main-bg dark:border-secondary-bg">
                <!-- Darkmode -->
                <darkMode @darkmode="toggleDark" title="darkmode" />
                <form @submit.prevent="addTodos" class="space-y-6 ">
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
            <inputComponent v-model="searchFilter" typeInput="text" nameInput="search" placeholderInput="Atomic habbits"
                styleInput="form-input mb-4" />
            <FilterRadios />
            <ul v-auto-animate>
                <template v-for="({ judul, penulis, tahun, reading, id }) in  filterTodos" :key="id">
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
                                <IconVue class="text-base group-hover:rotate-6 group-hover:opacity-90 delete"
                                    icon="bi:ban" />
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
