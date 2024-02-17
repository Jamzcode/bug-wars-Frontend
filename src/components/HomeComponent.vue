<template>
  <Transition appear>
    <div class="homepage-window">
      <div class="bug" id="image">
        <img src="..\assets\bugwars-logo-homepage.png" alt="bugwars-logo" />
      </div>

      <div class="bug" id="spider">
        <img src="..\assets\Spider pic.png" alt="spider" />
      </div>

      <div class="bug" id="ant">
        <img src="..\assets\Ant pic.png" alt="ant" />
      </div>

      <div class="bug" id="beetle">
        <img src="..\assets\Beetle pic.png" alt="beetle" />
      </div>

      <div class="bug" id="roach">
        <img src="..\assets\Roach pic.png" alt="roach" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.homepage-window {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    '. . . . .'
    'spider ant image beetle roach'
    '. . . . .';
}

.v-enter-active,
.v-leave-active {
  transition:
    opacity 2s ease,
    transform 1s ease-in-out;
  transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

#image {
  grid-area: image;
}

#spider {
  grid-area: spider;
}

#ant {
  grid-area: ant;
}

#beetle {
  grid-area: beetle;
}
#roach {
  grid-area: roach;
}

.bug {
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 0;
}
</style>
