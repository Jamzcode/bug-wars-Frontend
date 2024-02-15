<template>
  <div id="species-selector-container">
    <!-- Species Selector Element -->
    <div class="species-selector">
      <div class="inner-box">
        <!-- Title -->

        <!-- Button Container -->

        <div id="button-container">
          <div id="header">
            <h3>SPECIES SELECT</h3>
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
#test-button {
  display: flex;
  justify-content: center;
  height: 40px;
}
.species-selector {
  border-radius: 20px;
  border-style: solid;
  /* border-color: #ffffff; */
  border-width: 1px;
  width: 225px;
  height: 285px;
  position: relative;
  gap: 10px;
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
}
#header {
  display: flex;
  color: #53b290;
  font-size: 12px;
  width: 100%;
  justify-content: center;
  font-family: 'Michroma', sans-serif;
}
h3 {
  height: 30px;
  margin: 0;
}
.button-div {
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: center;
}
</style>
