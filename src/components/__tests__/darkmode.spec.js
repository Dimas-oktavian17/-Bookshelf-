/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import ToggleSwitch from '../darkmode.vue'

describe('ToggleSwitch', () => {
    it('emits "darkmode" event when clicked', async () => {
        const wrapper = mount(ToggleSwitch)
        const input = wrapper.find('input')

        await input.trigger('click')

        expect(wrapper.emitted('darkmode')).toBeTruthy()
    })
})
