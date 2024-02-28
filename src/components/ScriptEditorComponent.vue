<template>
  <!-- Needs Logo -->

  <div id="script-editor-title-div">
    <div id="title-div">
      <h1 id="title">SCRIPT EDITOR</h1>
    </div>

    <!-- Adjust box to be display:grid and map out elements inside. -->
    <div id="script-editor-container">
      <div id="script-editor-box">
        <div id="name-input-div">
          <input id="name-input-field" placeholder="script-name" />
        </div>

        <!-- confirm button div -->
        <div id="confirm-button-div">
          <button id="confirm-button">CONFIRM</button>
        </div>

        <div id="script-input-box">
          <input id="script-input" type="text" placeholder="Add script moves" />
        </div>

        <!-- generate button div -->
        <div id="generate-button-div">
          <button id="generate-button">GENERATE</button>
        </div>

        <!-- save button div -->
        <div id="save-button-div">
          <button id="save-button">SAVE</button>
        </div>

        <!-- script-name-display should be an input field -->
        <div id="script-name-display">SCRIPT_NAME</div>

        <div id="output-label">OUTPUT :</div>

        <div id="output-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>


button {
  border-radius: 5px;
}

div {
  display: flex;
  height: 100%;
  width: 100%;
}
#title-div {
  width: 100%;
  justify-content: flex-end;
}

#title {
  width: 600px;
  height: 70px;

  background: linear-gradient(to bottom, #f0f0f0, #070707f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Hide original text */

  font-size: 45px;
  font-family: Michroma;
  font-weight: bold;
  letter-spacing: 5.2px;
  /* border: solid purple 2px; */

  transform: rotate(-90deg);
  translate: 270px 200px;
}

#script-editor-box {
  width: 450px;
  height: 650px;
  background: #0a111c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  display: grid;
  grid-template-columns: 0.5fr 8fr 8fr 0.5fr;
  grid-template-rows: 0.5fr 1fr 8fr 1fr 1fr 8fr 0.5fr;
  grid-template-areas:
    '. . . .'
    '. name confirm .'
    '. script-input script-input .'
    '. gen save .'
    '. output-label name-display .'
    '. script-output script-output .'
    '. . . .';
}

#name-input-div {
  grid-area: name;
  align-items: flex-end;
}

#name-input-field {
  border: solid #53b290 1px;
  border-radius: 5px;
  width: 130px;
  height: 30px;
  margin-bottom: 5px;
}

#confirm-button-div {
  grid-area: confirm;
  align-items: flex-end;
  justify-content: end;
}

#confirm-button {
  align-content: center;
  justify-content: center;
  width: 130px;
  height: 30px;

  background: #53b290;
  border: #53b290;

  font-family: Michroma;
  margin-bottom: 5px;
}

#script-input-box {
  grid-area: script-input;
  background: #0a111c;
}

#script-input {
  width: 100%;
  border: none left#53b290 solid 3px;
}

#generate-button-div {
  grid-area: gen;
}

#generate-button {
  background: #e55300;
  border: #e55300;

  font-family: Michroma;
  width: 130px;
  height: 30px;
  margin-top: 5px;
}

#save-button-div {
  grid-area: save;
  justify-content: end;
}

#save-button {
  font-family: Michroma;
  background: #9b9b9b;
  border: #9b9b9b;
  width: 130px;
  height: 30px;
  margin-top: 5px;
}

#output-label {
  grid-area: output-label;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Michroma;
  font-weight: 400;
  /* word-wrap: break-word; */
  align-items: flex-end;
  justify-content: end;
  padding-right: 10px;
}

#script-name-display {
  grid-area: name-display;
  text-align: center;
  color: #e55300;
  font-size: 10px;
  font-family: Michroma;
  font-weight: 400;
  align-items: flex-end;
  /* word-wrap: break-word; */
}

#output-box {
  grid-area: script-output;

  background: #0a111c;
  border-top: solid #e55300 3px;
}

/* .script-editor-box,
.script-editor-box * {
  box-sizing: border-box;
} */
</style>
