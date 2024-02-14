<template>
  <div id="species-selector-container">
    <!-- Species Selector Element -->
    <div class="species-selector">
      <div class="inner-box">
        <!-- Title -->

        <!-- Button Container -->

        <div id="button-container">
          <div id="header">
            <h3>species select</h3>
          </div>

          <!-- Test Button -->

          <div id="test-button">
            
            <drop-down-component :items="scripts" />
            <!-- <font-awesome-icon :icon="['fas', 'caret-down']"/> -->
          </div>

          <div id="test-button">
            <drop-down-component :items="scripts" />
          </div>
          <div id="test-button">
            <drop-down-component :items="scripts" />
          </div>
          <div id="test-button">
            <drop-down-component :items="scripts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDownComponent from './DropDownComponent.vue'
export default {
  components: { DropDownComponent },
  data() {
    return {
      scripts: [
        {
          title: 'script 1'
        },
        {
          title: 'script 2'
        },
        {
          title: 'script 3'
        },
        {
          title: 'script 4'
        }
      ]
    }
  }
}
</script>

<style scoped>
.species-selector {
  border-radius: 30px;
  border-style: solid;
  /* border-color: #ffffff; */
  border-width: 1px;
  width: 225px;
  height: 285px;
  position: relative;
}

.inner-box {
  background: rgba(10, 17, 28, 0.5);
  border-radius: 30px;
  height: 100%;
}

#button-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-content: center;
  margin-left: 10px;
}
#header {
  display: flex;
  color: chartreuse;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  justify-content: center;
}

.button-div {
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: center;
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
</style>
