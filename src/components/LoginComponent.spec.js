// LoginComponent.spec.js
import { mount } from '@vue/test-utils'
import LoginComponent from './LoginComponent.vue'

describe('LoginComponent', () => {
  it('renders "My Login"', () => {
    const wrapper = mount(LoginComponent)
    expect(wrapper.text()).toContain('My Login')
  })
})
