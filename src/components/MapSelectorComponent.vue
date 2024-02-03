<template>
  
    <div class="map-selector">
      
      
        <div class="map-selector-box">
        
            <div class="left-arrow">
          <button id="left">
            <fa-fa icon="caret-left" />
          </button>
        </div>

        <div id="map-window">
          <img src="C:\Users\james\workspace\side-projects\crusader-games\bug-wars\bug-wars-Frontend\src\assets\map-image.jpg" alt="Bedbug">
        </div>

        <div class="right-arrow">
          <button id="right">
            <fa-fa icon="caret-right" />
          </button>
        </div>

        <div id="level-name">ARENA: Your back yard...</div>
        <div id="box-label">WAR ZONE</div>
      </div>
    
    
    </div>

</template>

<script>
export default {}
</script>

<style scoped>
.map-selector{
  display: flex;
  justify-content: center;
}

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
  border-width: 2px;

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
  justify-self: center;
  align-self: center;

  width: 300px;
  height: 310px;
}

.left-arrow {
  grid-area: left-arrow;
  justify-self: center;
  align-self: center;
}

#left{
  color: chartreuse;
  background-color: #e55300;
}

.right-arrow {
  grid-area: right-arrow;
  justify-self: center;
  align-self: center;
}

#right{
  color: chartreuse;
  background-color: #e55300;
}

#left:hover{
  background: goldenrod;
}

#right:hover{
  background: goldenrod;
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

img{
  border: white dotted 1.5px;
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
