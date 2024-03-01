<template>
  <div id="species-selector-container">
    <!-- Species Selector Element -->
    <div class="species-selector">
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
</template>

<script>
import DropDownComponent from './DropDownComponent.vue'
export default {
  components: { DropDownComponent },
  data() {
    return {
      scripts: [
        {
          title: '...'
        },
        {
          title: 'SCRIPT '
        },
        {
          title: 'SCRIPT'
        },
        {
          title: 'SCRIPT'
        },
        {
          title: 'SCRIPT'
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
  background: #0a111c;
  margin-left: 12px;
  width: 225px;
  height: 285px;
  position: relative;
  box-shadow: 0 0 5px #53b290;

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
