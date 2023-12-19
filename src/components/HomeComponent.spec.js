// HomeComponent.spec.js
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomeComponent from './HomeComponent.vue'

describe('HomeComponent', () => {
  it('renders "My Home" and "Testing changes"', () => {
    const wrapper = shallowMount(HomeComponent)
    expect(wrapper.text()).toContain('My Home')
    expect(wrapper.text()).toContain('Testing changes')
  })
})
