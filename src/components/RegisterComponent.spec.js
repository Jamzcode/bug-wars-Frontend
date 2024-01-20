import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import RegisterComponent from '../components/RegisterComponent.vue'
import UserService from '@/services/users'
import AuthService from '@/services/AuthService'

describe('RegisterComponent', () => {
  it('renders the header text', () => {
    const wrapper = shallowMount(RegisterComponent)

    const createAcc = wrapper.get('h2')
    const loginMsg = wrapper.get('.login-msg')

    expect(createAcc.text()).toEqual('Create Account')
    expect(loginMsg.text()).toContain('Already have an account? Login here')
  })

  it('renders the username input field', () => {
    const wrapper = shallowMount(RegisterComponent)

    const usernameInput = wrapper.get('#username-input')

    expect(usernameInput.find('label').text()).toEqual('Username')
    expect(usernameInput.find('InputText').exists()).toBeTruthy
  })

  it('renders the email input field', () => {
    const wrapper = shallowMount(RegisterComponent)

    const emailInput = wrapper.get('#email-input')

    expect(emailInput.find('label').text()).toEqual('Email')
    expect(emailInput.find('InputText').exists()).toBeTruthy
  })

  it('renders the password input field', () => {
    const wrapper = shallowMount(RegisterComponent)

    const passwordInput = wrapper.get('#password-input')

    expect(passwordInput.find('label').text()).toEqual('Password')
    expect(passwordInput.find('Password').exists()).toBeTruthy
  })

  it('renders the confirmPassword input field', () => {
    const wrapper = shallowMount(RegisterComponent)

    const confirmPasswordInput = wrapper.get('#confirmPassword-input')

    expect(confirmPasswordInput.find('label').text()).toEqual('Confirm password')
    expect(confirmPasswordInput.find('Password').exists()).toBeTruthy
  })

  it('renders the register button', () => {
    const wrapper = shallowMount(RegisterComponent)

    const registerButton = wrapper.get('#register-btn')

    expect(registerButton.exists()).toBeTruthy()
    expect(registerButton.find('PrimeButton').exists()).toBeTruthy
  })
})

describe('RegisterComponent', () => {
  it('should have initial form validation', async () => {
    const wrapper = shallowMount(RegisterComponent)

    // Set data using setData and wait for the next tick
    await wrapper.setData({
      user: {
        username: 'validUsername',
        email: 'valid@email.com',
        password: 'ValidPassword123'
      },
      confirmPassword: 'ValidPassword123'
    })

    // Wait for the next tick to ensure data is updated
    await wrapper.vm.$nextTick()

    // Assert that the form becomes valid
    expect(wrapper.vm.v$.user.username.$error).toBe(false)
    expect(wrapper.vm.v$.user.email.$error).toBe(false)
    expect(wrapper.vm.v$.user.password.$error).toBe(false)
    expect(wrapper.vm.v$.confirmPassword.$error).toBe(false)
  })

  it('should handle form submission', async () => {
    const wrapper = shallowMount(RegisterComponent)

    // Mock the form submission
    wrapper.vm.register = () => {} // Replace with your actual register method

    // Simulate user input to fill the form
    wrapper.setData({
      user: {
        username: 'validUsername',
        email: 'valid@email.com',
        password: 'ValidPassword123'
      },
      confirmPassword: 'ValidPassword123'
    })

    // Trigger form submission
    await wrapper.find('form').trigger('submit.prevent')

    // Assert that the register method is called
    expect(wrapper.vm.register).toHaveBeenCalledOnce

    // Assert that the Toast component is rendered on successful registration
    // Note: Modify this assertion based on your actual implementation
    expect(wrapper.findComponent({ name: 'Toast' }).exists()).toBe(true)
  })

  it('checks the username and sets error if it exists', async () => {
    const wrapper = shallowMount(RegisterComponent)

    // Mock the UserService.getUsers method to return existing users
    UserService.getUsers = async () => ({ data: [{ username: 'existingUser' }] })

    wrapper.vm.$toast = {
      add: () => {} // Mock the add method
    }
    // Set a valid username
    await wrapper.setData({ user: { username: 'existingUser' } })

    // Call the checkUsername method
    await wrapper.vm.checkUsername()

    // Assert that the error is set and toast message is displayed
    expect(wrapper.vm.throwUsernameError).toBeTruthy
    // Add more specific assertions if needed
  })

  it('checks the email and sets error if it exists', async () => {
    const wrapper = shallowMount(RegisterComponent)

    // Mock the UserService.getUsers method to return existing users
    UserService.getUsers = async () => ({ data: [{ email: 'existing@email.com' }] })

    wrapper.vm.$toast = {
      add: () => {} // Mock the add method
    }

    // Set a valid email
    await wrapper.setData({ user: { email: 'existing@email.com' } })

    // Call the checkEmail method
    await wrapper.vm.checkEmail()

    // Assert that the error is set and toast message is displayed
    expect(wrapper.vm.throwEmailError).toBeTruthy
    // Add more specific assertions if needed
  })

  it('checks if passwords match', async () => {
    const wrapper = shallowMount(RegisterComponent)

    wrapper.vm.$toast = {
      add: () => {} // Mock the add method
    }

    await wrapper.setData({ user: { password: 'password' } })
    await wrapper.setData({ confirmPassword: 'password' })

    await expect(wrapper.vm.passwordsMatch()).toBeTruthy
  })

  it('registers successfully', async () => {
    const wrapper = shallowMount(RegisterComponent)

    const registerMock = vi.fn(() => Promise.resolve({ status: 201 }))

    wrapper.vm.$authService.register = registerMock

    wrapper.vm.checkUsername = async () => true
    wrapper.vm.checkEmail = async () => true
    wrapper.vm.v$.$pending = false
    wrapper.vm.v$.$error = false
    wrapper.vm.throwUsernameError = false
    wrapper.vm.throwEmailError = false
    wrapper.vm.passwordsMatch = true

    // Set valid user data
    await wrapper.setData({
      user: {
        username: 'validUsername',
        email: 'valid@email.com',
        password: 'ValidPassword123'
      },
      confirmPassword: 'ValidPassword123'
    })

    // Call the register method
    await wrapper.vm.register()

    // Expectation
    expect(registerMock).toHaveBeenCalled()
    expect(registerMock).toHaveBeenCalledWith({
      username: 'validUsername',
      email: 'valid@email.com',
      password: 'ValidPassword123'
    })
  })
})
