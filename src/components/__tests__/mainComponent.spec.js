/* eslint-disable no-undef */

import { shallowMount } from '@vue/test-utils'
import YourComponent from '../mainComponent.vue'

describe('YourComponent', () => {
    it('should save item correctly', () => {
        const wrapper = shallowMount(YourComponent)
        // Set the necessary data values
        wrapper.vm.title = 'Book Title'
        wrapper.vm.author = 'Book Author'
        wrapper.vm.year = '2022'
        wrapper.vm.doneRead = true

        // Call the saveItem function
        wrapper.vm.saveItem()

        // Check if the data values are reset correctly
        expect(wrapper.vm.title).toBe('')
        expect(wrapper.vm.author).toBe('')
        expect(wrapper.vm.year).toBe('')

        // Check if the data array has been updated correctly
        expect(wrapper.vm.data).toEqual([
            {
                id: 1,
                judul: 'Book Title',
                penulis: 'Book Author',
                tahun: 2022,
                reading: true
            }
        ])
    })

    it('should delete book correctly', () => {
        const wrapper = shallowMount(YourComponent)
        // Set some initial data values
        wrapper.vm.data = [
            {
                id: 1,
                judul: 'Book 1',
                penulis: 'Author 1',
                tahun: 2021,
                reading: true
            },
            {
                id: 2,
                judul: 'Book 2',
                penulis: 'Author 2',
                tahun: 2022,
                reading: false
            }
        ]

        // Call the deleteBook function with id 1
        wrapper.vm.deleteBook(1)

        // Check if the book with id 1 has been deleted
        expect(wrapper.vm.data).toEqual([
            {
                id: 2,
                judul: 'Book 2',
                penulis: 'Author 2',
                tahun: 2022,
                reading: false
            }
        ])
    })
    it('should toggle the reading status', () => {
        const wrapper = shallowMount(YourComponent)

        // Set some initial data values
        wrapper.vm.data = [
            {
                id: 1,
                judul: 'Book 1',
                penulis: 'Author 1',
                tahun: 2021,
                reading: true
            },
            {
                id: 2,
                judul: 'Book 2',
                penulis: 'Author 2',
                tahun: 2022,
                reading: false
            }
        ]

        // Call the changeStatus function with id 1
        wrapper.vm.changeStatus(1)

        // Check if the reading status for the book with id 1 has been toggled
        expect(wrapper.vm.data[0].reading).toBe(false)

        // Call the changeStatus function with id 2
        wrapper.vm.changeStatus(2)

        // Check if the reading status for the book with id 2 has been toggled
        expect(wrapper.vm.data[1].reading).toBe(true)
    })
})
