<script setup>
import { computed, ref } from 'vue'
const title = ref('')
const author = ref('')
const year = ref('')
const doneRead = ref(false)
const searchBooks = ref('')
const data = ref([
    { id: '1', judul: 'abc', penulis: 'joko', tahun: 200, reading: true }
])
const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
}
const saveItem = () => {
    data.value.push({
        id: data.value.length + 1,
        judul: title.value,
        penulis: author.value,
        tahun: year.value,
        reading: doneRead.value
    }
    )
    title.value = ''
    author.value = ''
    year.value = ''

}
const searchBook = computed(() => {
    let result = data.value.toReversed()
    return result.filter(book => book.judul.toLowerCase().includes(searchBooks.value.toLowerCase()))
})
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
            <ul>
                <template v-for="({ judul, penulis, tahun, reading, id }) in  searchBook " :key="id">
                    <li v-if="reading" class="text-green-700">
                        ini sudah baca {{ judul }} - {{ penulis }} - {{ tahun }} - {{ reading }}
                    </li>
                    <li v-else class="text-red-400">
                        ini belum baca {{ judul }} - {{ penulis }} - {{ tahun }} - {{ reading }}
                    </li>
                </template>
            </ul>
        </section>
        <!-- Search fiture -->
        <section aria-label="searchWrapper" class="flex flex-col items-center justify-center ">

            <labelComponent labelFor="search" styleLabel="mb-2 text-xl font-bold text-left text-main-text"
                title="Search your books!" />

            <inputComponent v-model="searchBooks" typeInput="text" nameInput="search" placeholderInput="Atomic habbits"
                styleInput="container max-w-sm p-4 mb-2 bg-transparent border rounded-lg dark:text-white border-white/60 shadow-m
            dark:bg-main-bg" />

        </section>
    </main>
</template>
