<template>
  <div id="map-selector-container">
    <div class="map-selector">
      
      
        <div class="map-selector-box">
        
            <div id="left-arrow">
          <button>
            <fa-fa icon="caret-left" />
          </button>
        </div>

        <div id="map-window"></div>

        <div id="right-arrow">
          <button >
            <fa-fa icon="caret-right" />
          </button>
        </div>

        <div id="level-name">[title]</div>
        <div id="box-label">select map</div>
      </div>
    
    
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.map-selector-box {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr;
  grid-template-areas:
    '. map-select map-select .'
    '. map-window map-window .'
    'left-arrow map-window map-window right-arrow'
    '. map-window map-window .'
    '. level-name level-name .';

  background: #0a111c;
  border-radius: 30px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;

  justify-content: center;

  position: absolute;
  width: 420px;
  height: 490px;
}

#box-label {
  grid-area: map-select;
  justify-self: center;
  align-self: end;
  color: #3c838d;
  font-family: 'Michroma-Regular', sans-serif;
  font-size: 30px;
  font-weight: 400;
  margin: 0;
}
#map-window {
  grid-area: map-window;
  background: #3e3b3b;
  position: absolute;
  justify-self: center;
  align-self: center;

  width: 300px;
  height: 310px;
}

#left-arrow {
  grid-area: left-arrow;
  justify-self: center;
  align-self: center;
}
#right-arrow {
  grid-area: right-arrow;
  justify-self: center;
  align-self: center;
}

#level-name {
  grid-area: level-name;
  justify-self: center;
  color: #53b290;
  text-align: center;
  font-family: 'Michroma-Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  width: auto;
}
</style>
