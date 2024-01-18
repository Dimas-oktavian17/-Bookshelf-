import { defineStore } from 'pinia'


export const useTodos = defineStore('todos', {
    state: () => ({
        // * store data from todos
        todos: [],
        // * filtering todos { 'all'| 'true'| 'false'}
        filter: 'all',
        // * init auto id 
        nextId: 0,
        // * searchbar
        searchFilter: '',
    }),
    getters: {
        finishedTodos(state) {
            // when todo is completed
            return state.todos.filter(todo => todo.reading)
        },
        unfinishedTodos(state) {
            return state.todos.filter(todo => !todo.reading)
        },
        // * return all todos
        filterTodos(state) {
            const results = state.searchFilter.toLowerCase()
            return state.todos.filter(todo => {
                if (this.filter === 'true' && todo.reading !== true) return false
                if (this.filter === 'false' && todo.reading !== false) return false
                if (this.searchFilter && !todo.judul.toLowerCase().includes(results.toLowerCase())) return false
                return true
            })
        },

    },
    actions: {
        addTodos(title, author, year, doneRead) {
            this.todos.push({
                id: this.nextId++,
                judul: title,
                penulis: author,
                tahun: year,
                reading: doneRead
            })
        },
        deleteBook(id) {
            this.todos = this.todos.filter(book => book.id !== id)
        },
        changeStatus(id) {
            let book = this.todos.find(book => book.id === id)
            return book.reading = !book.reading
        },
        handleSearch(query) {
            this.searchFilter = query
        },
    },
    persist: true
})
