<template>
  <div id="species-selector-container">
    <!-- Species Selector Element -->
    <div class="species-selector">
      <div class="species-selector2"></div>

      <!-- Title -->
      <div id="header">species select</div>

      <!-- Button Container -->
      <div class="_04-species-dropdown-button">
        <button class="species-dropdown">Species <fa-fa icon="caret-down"></fa-fa></button>
        <!-- <fa-fa icon="coffee"></fa-fa> -->
      </div>

      <div class="_03-species-dropdown-button">
        <button class="species-dropdown2">Species <fa-fa icon="caret-down"></fa-fa></button>
      </div>

      <div class="_02-species-dropdown-button">
        <button class="species-dropdown3">Species <fa-fa icon="caret-down"></fa-fa></button>
      </div>

      <div class="_01-species-dropdown-button">
        <button class="species-dropdown4">Species <fa-fa icon="caret-down"></fa-fa></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

.species-selector2 {
  background: rgba(10, 17, 28, 0.5);
  border-radius: 30px;
  height: 100%;
}
#header {
  display: flex;
  color: #fbf8f8;
  text-align: left;
  font-family: 'Michroma-Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  width: 100%;
  justify-content: center;
  top: 29px;
}

._04-species-dropdown-button {
  width: 200px;
  height: 31px;
  position: static;
}
.species-dropdown {
  background: rgba(60, 131, 141, 0.75);
  border-radius: 5px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  width: 200px;
  height: 31px;
  position: absolute;
  left: 12px;
  top: 81px;
}

.species-dropdown2 {
  background: rgba(60, 131, 141, 0.75);
  border-radius: 5px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  width: 200px;
  height: 31px;
  position: absolute;
  left: 12px;
  top: 120px;
}

.species-dropdown3 {
  background: rgba(60, 131, 141, 0.75);
  border-radius: 5px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  width: 200px;
  height: 31px;
  position: absolute;
  left: 12px;
  top: 159px;
}

.species-dropdown4 {
  background: rgba(60, 131, 141, 0.75);
  border-radius: 5px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  width: 200px;
  height: 31px;
  position: absolute;
  left: 12px;
  top: 198px;
}
</style>
