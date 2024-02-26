<template>
  <div>
    <!-- Needs Logo -->





    <!-- Adjust box to be display:grid and map out elements inside. -->
    <div id="script-editor-box"></div>

    <!-- save button div -->
    <div class="button-div" style="left: 159px; top: 281px; position: absolute">
      <button id="save-button" style="">SAVE</button>
    </div>

    <!-- generate button div -->
    <div class="button-div" style="left: 17px; top: 282px; position: absolute">
      <button id="generate-button">GENERATE</button>
    </div>

    <!-- confirm button div -->
    <div
      class="button-div"
      style="left: 159px; top: 87px; position: absolute"
    >
      <button id="confirm-button" style="">CONFIRM</button>
    </div>
    <input id="script-name-input-field" placeholder="script-name">
    <div id="script-input-box"></div>

    <!-- script-name-display should be an input field -->
    <div id="script-name-display">SCRIPT_NAME</div>

    <div id="title">SCRIPT EDITOR</div>

    <div id="output-label">OUTPUT :</div>

    <div id="output-box"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#save-button {
  font-family: Michroma;
  width: 127.04px;
  height: 19.96px;
 
  /* position: absolute; */
  background: #9b9b9b;
  border-radius: 5px;
}

#generate-button {
  width: 127.04px;
  height: 19.96px;
  
  /* position: absolute; */
  background: #e55300;
  border-radius: 5px;
  font-family: Michroma;
}

.button-div {
  width: 127.04px;
  height: 19.96px;
}

#confirm-button {

  /* source and adjust flex-wrap */
  display: flex;
  align-content: center;
  justify-content: center;
  
  
  width: 127.04px;
  height: 19.96px;
  background: #53b290;
  border-radius: 5px;
  font-family: Michroma;
}

#script-editor-box {
  width: 292px;
  height: 445px;
  left: 8px;
  top: 74px;
  /* position: absolute; */
  background: #0a111c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 1px solid;
}

#script-name-input-field {
  width: 127.04px;
  height: 19.96px;
  left: 18px;
  top: 87px;
  /* position: absolute; */
  border: solid #53b290 1px;
  border-radius: 5px;
}

#script-input-box {
  background: #5d5e61;
  width: 269.15px;
  height: 149.68px;
  left: 18px;
  top: 114px;
  /* position: absolute; */
  border-radius: 5px;
}

#output-box {
  width: 268px;
  height: 158px;
  left: 18px;
  top: 344px;
  /* position: absolute; */
  background: #5d5e61;
  border-radius: 5px;
}

#output-label {
  width: 105.45px;
  height: 23px;
  left: 18px;
  top: 318px;
  /* position: absolute; */
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Michroma;
  font-weight: 400;
  word-wrap: break-word;
}

#script-name-display {
  width: 113.04px;
  height: 11.64px;
  left: 129px;
  top: 327px;
  /* position: absolute; */
  text-align: center;
  color: #e55300;
  font-size: 10px;
  font-family: Michroma;
  font-weight: 400;
  word-wrap: break-word;
}

#title {
  width: 504px;
  height: 40px;
  left: -38px;
  top: 559px;
  /* position: absolute; */
  transform: rotate(-90deg);
  transform-origin: 0 0;
  text-align: center;
  color: #708396;
  font-size: 40px;
  font-family: Michroma;
  font-weight: 400;
  letter-spacing: 5.2px;
  word-wrap: break-word;
}

.script-editor-box,
.script-editor-box * {
  box-sizing: border-box;
}
</style>
