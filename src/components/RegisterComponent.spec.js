import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import RegisterComponent from './RegisterComponent.vue'

// Unit tests
describe('RegisterComponent', () => {
  const wrapper = shallowMount(RegisterComponent)

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

  it('Displays validation errors with invalid input', async () => {
    await wrapper.setData({
      user: {
        username: 'zelbael',
        email: 'test@test.com',
        password: {
          password: '123',
          confirm: '1234'
        }
      }
    })

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.v$.user.username.$pending).toBeFalsy()
    expect(wrapper.vm.v$.user.username.$errors).toBeTruthy()

    expect(wrapper.vm.v$.user.email.$pending).toBeFalsy()
    expect(wrapper.vm.v$.user.email.$errors).toBeTruthy()

    expect(wrapper.vm.v$.user.password.password.$pending).toBeFalsy()
    expect(wrapper.vm.v$.user.password.password.$errors).toBeTruthy()

    expect(wrapper.vm.v$.user.password.confirm.$pending).toBeFalsy()
    expect(wrapper.vm.v$.user.password.confirm.$errors).toBeTruthy()
  })
})
