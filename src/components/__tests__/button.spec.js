/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import button from '../../components/button.vue'


test('props', () => {
    const buttonProps = mount(button, {
        props: {
            title: 'Register books!'
        }
    })
    expect(buttonProps.html()).toContain('Register books!')
})

