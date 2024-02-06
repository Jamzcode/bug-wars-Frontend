<template>
  
  <div id="game-lobby-window">
    <game-lobby-component />
  </div>

</template>

<script>
import GameLobbyComponent from '@/components/GameLobbyComponent.vue'
export default {
  components: { GameLobbyComponent }
}
</script>

<style scoped>
#game-lobby-window {
  height: 100%;
  width: 100%;
  /* border: solid red 3px; */
}
</style>
