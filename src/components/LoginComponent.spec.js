// LoginComponent.spec.js
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LoginComponent from './LoginComponent.vue'

describe('LoginComponent', () => {
  it('renders "My Login"', () => {
    const wrapper = shallowMount(LoginComponent)
    expect(wrapper.text()).toContain('My Login')
  })
})
