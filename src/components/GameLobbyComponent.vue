<template>
  
    
    <div id="map-species-start">
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

<style>
#map-species-start {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  grid-template-areas:
  ". . . ."
  ". map species ."
  ". map species ."
  ".  button button ."
  ;
}

#map{
grid-area: map;
}

#species{
grid-area: species;
justify-self: start;
margin-left: 30px;
align-self: center;
}

#start-button{
grid-area: button;
justify-self: center;
}


</style>
