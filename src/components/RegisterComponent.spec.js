import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import RegisterComponent from './RegisterComponent.vue'
import authService from '@/services/AuthService'

// Unit tests
describe('RegisterComponent', () => {
  const mockRouter = {
    push: () => {}
  }
  const wrapper = shallowMount(RegisterComponent, {
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  })

  it('displays form correctly', () => {
    const usernameInput = wrapper.vm.$el.querySelector('input#username')
    const emailInput = wrapper.vm.$el.querySelector('input#email')
    const passwordInput = wrapper.vm.$el.querySelector('input#password')
    const confirmPasswordInput = wrapper.vm.$el.querySelector('input#confirmPassword')
    const submitButton = wrapper.vm.$el.querySelector('button[type="submit"]')

    expect(usernameInput).not.toBeNull()

    expect(usernameInput).not.toBeNull()
    expect(usernameInput.placeholder).toBe('Username')

    expect(emailInput).not.toBeNull()
    expect(emailInput.placeholder).toBe('Email')

    expect(passwordInput).not.toBeNull()
    expect(passwordInput.placeholder).toBe('Password')

    expect(confirmPasswordInput).not.toBeNull()
    expect(confirmPasswordInput.placeholder).toBe('Confirm Password')

    expect(submitButton).not.toBeNull()
  })
})
