/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import inputComponent from '../input.vue'

describe('input unit testing', () => {
    it('emits update:modelValue event when input value changes', async () => {
        const wrapper = mount(inputComponent, {
            props: {
                modelValue: 'initial value',
                nameInput: 'input name',
                placeholderInput: 'input placeholder',
                typeInput: 'text',
                styleInput: 'input-style'
            }
        })

        const input = wrapper.find('input')
        input.setValue('new value')

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')[0][0]).toBe('new value')
    })
})
