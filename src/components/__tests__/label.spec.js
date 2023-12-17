/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import label from '../../components/label.vue'

describe('MyComponent', () => {
    it('renders the label with the correct props', () => {
        const wrapper = mount(label, {
            props: {
                labelFor: 'author',
                title: 'Author',
                styleLabel: 'form-input',
            },
        })

        expect(wrapper.find('label').attributes('for')).toBe('author')
        expect(wrapper.find('label').classes()).toContain('form-input')
        expect(wrapper.find('label').text()).toBe('Author')
    })
})
