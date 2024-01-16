import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterComponent from '../components/RegisterComponent.vue'

describe('RegisterComponent', () => {
  const wrapper = mount(RegisterComponent)

  it('displays inputs correctly', () => {
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

  it('Sets validation errors to true with invalid input to true', async () => {
    await wrapper.setData({
      user: {
        username: 'spider_bug',
        email: 'email',
        password: '12345'
      },
      confirmPassword: '123456'
    })

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    const usernameError = wrapper.vm.v$.user.username.$error
    const emailError = wrapper.vm.v$.user.email.$error
    const passwordError = wrapper.vm.v$.user.password.$error
    const confirmError = wrapper.vm.v$.confirmPassword.$error

    expect(usernameError).toBeTruthy()

    expect(emailError).toBeTruthy()

    expect(passwordError).toBeTruthy()

    expect(confirmError).toBeTruthy()
  })

  // it('Displays validation error messages with invalid input', async () => {
  //   await wrapper.setData({
  //     user: {
  //       username: 'spider_bug',
  //       email: 'spider_bug@example.com',
  //       password: '$2a$10$SpiderBugPassword'
  //     },
  //     confirmPassword: 'password'
  //   })

  //   await wrapper.find('form').trigger('submit.prevent')
  //   await wrapper.vm.$nextTick()

  //   const usernameError = wrapper.vm.$el.querySelector('span#username-err')
  //   const emailError = wrapper.vm.$el.querySelector('span#email-err')
  //   const passwordError = wrapper.vm.$el.querySelector('span#password-err')
  //   const confirmError = wrapper.vm.$el.querySelector('span#confirmPassword-err')

  //   expect(usernameError.textContent).toBe('USERNAME EXISTS')
  //   expect(emailError.textContent).toBe('EMAIL EXISTS')
  //   expect(passwordError.textContent).toBe('This field should be at least 6 characters long')
  //   expect(confirmError.textContent).toBe('passwords do not match')
  // })
})
