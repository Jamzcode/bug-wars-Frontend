<template>
    <div id="map-species-start">
      <div id="image" >
        <img id="logo" src="C:\Users\james\workspace\side-projects\crusader-games\bug-wars\bug-wars-Frontend\src\assets\bugwars-logo.png" alt="">
      </div>
      <div id="map">
        <map-selector-component />
      </div>

      <div id="species">
        <species-selector-component />
      </div>

      <div id="start-button">
        <start-button-component />
      </div>
  </div>
</template>

<script>
import MapSelectorComponent from './MapSelectorComponent.vue'
import SpeciesSelectorComponent from './SpeciesSelectorComponent.vue'
import StartButtonComponent from './StartButtonComponent.vue'
export default {
  components: { MapSelectorComponent, SpeciesSelectorComponent, StartButtonComponent }
}
</script>

<style scoped>
#map-species-start {
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr ;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  grid-template-areas:
  ". image . "
  ". map species "
  ". map species "
  ".  button . "
  ;
}

#map{
grid-area: map;
display: flex;
justify-content: center;

}

#species{
grid-area: species;
justify-self: start;
margin-left: 10px;
align-self: center;
}

#start-button{
grid-area: button;
justify-self: center;
}

#image{
  display: flex;
  justify-content: center;
grid-area: image;

}


</style>
