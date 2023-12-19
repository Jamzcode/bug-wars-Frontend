// UsersComponent.spec.js
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import UsersComponent from './UsersComponent.vue'
import UserService from '@/services/users'

// Mocking data
const userByIdData = { id: 1, name: 'User 1' }

// Mocking the getUserById method
UserService.getUserById = async () => ({ data: userByIdData })

// Test case
describe('UsersComponent', () => {
  it('renders correctly and triggers getUserById method', async () => {
    // Mount the component
    const wrapper = shallowMount(UsersComponent)

    // Trigger getUserById method and wait for the promise to resolve
    await wrapper.find('button').trigger('click')

    // Check if the user is updated
    expect(wrapper.find('p').text()).toContain('one user:')

    // Reset the original method after the test
    UserService.getUserById = async () => {}
  })
})
