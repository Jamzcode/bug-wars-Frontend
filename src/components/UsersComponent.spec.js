// UsersComponent.spec.js
import { mount } from '@vue/test-utils'
import UsersComponent from './UsersComponent.vue'
import UserService from '@/services/users'

jest.mock('@/services/users', () => ({
  getUsers: jest.fn(),
  getUserById: jest.fn()
}))

describe('UsersComponent', () => {
  it('renders correctly and triggers getUsers and getUserById methods', async () => {
    // Mocking data
    const usersData = [{ id: 1, name: 'User 1' }]
    const userByIdData = { id: 1, name: 'User 1' }

    // Mocking the getUsers and getUserById methods
    UserService.getUsers.mockResolvedValue({ data: usersData })
    UserService.getUserById.mockResolvedValue({ data: userByIdData })

    // Mount the component
    const wrapper = mount(UsersComponent)

    // Check if the component renders correctly
    expect(wrapper.find('h1').text()).toBe('My Users')

    // Trigger getUsers method and wait for the promise to resolve
    await wrapper.find('[type="button"]').trigger('click')

    // Check if the users are updated
    expect(wrapper.find('p').text()).toContain('All users:')

    // Trigger getUserById method and wait for the promise to resolve
    await wrapper.findAll('[type="button"]').at(1).trigger('click')

    // Check if the user is updated
    expect(wrapper.find('p').text()).toContain('one user:')

    // Check if the methods were called
    expect(UserService.getUsers).toHaveBeenCalled()
    expect(UserService.getUserById).toHaveBeenCalledWith(1)
  })
})
