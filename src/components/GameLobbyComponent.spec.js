import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GameLobbyComponent from './GameLobbyComponent.vue'

describe('GameLobbyComponent', () => {
  it('renders "My Game Lobby"', () => {
    const wrapper = shallowMount(GameLobbyComponent)
    expect(wrapper.text()).toContain('My Game Lobby')
  })
})