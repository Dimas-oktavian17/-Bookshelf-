/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import filterComponent from '../filterRadios.vue'

describe('filterComponent', () => {
    it('should emit the correct value when radio buttons are changed', async () => {
        const wrapper = mount(filterComponent)
        const radioButtons = wrapper.findAll('input[type="radio"]')

        // Simulate changing the radio button value
        await radioButtons[1].setChecked()

        // Verify that the emitted event contains the correct value
        expect(wrapper.emitted().filter[0][0]).toBe('true')
    })
})
