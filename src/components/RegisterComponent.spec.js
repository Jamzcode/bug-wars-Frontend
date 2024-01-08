import { describe, expect, it, assert } from 'vitest'
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

  it(
    'displays form correctly',
    () => {
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
    },
    it('submits forms with valid data', async () => {
      authService.register.returns(Promise.resolve({ status: 201 }))

      await wrapper.setData({
        user: {
          username: 'test123',
          email: 'test123@test.com',
          password: {
            password: '123456',
            confirm: '123456'
          }
        }
      })

      await wrapper.find('form').trigger('submit.prevent')
      await wrapper.vm.$nextTick()

      assert.calledWith(mockRouter.push, { path: '/login' })
      assert.calledWith(wrapper.vm.success, 'Thank you for registering, please sign in.')
    })
  )
})
