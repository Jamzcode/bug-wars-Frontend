// HomeComponent.spec.js
import { mount } from '@vue/test-utils'
import HomeComponent from './HomeComponent.vue'

describe('HomeComponent', () => {
  it('renders "My Home" and "Testing changes"', () => {
    const wrapper = mount(HomeComponent)
    expect(wrapper.text()).toContain('My Home')
    expect(wrapper.text()).toContain('Testing changes')
  })
})
