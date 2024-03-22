<template>
  <div id="HTP-container">
    <div class="text-container">
      <div class="objective-container">
        <div class="title" id="objective-title">OBJECTIVE</div>
        <div class="text">
          Bug wars is a Battle Royale where players create a command script for their bug to be
          pitted against other bugs. In an effort to be the last species standing, bugs will attack
          one another, eat food and each other, to increase their numbers and take over the
          battleground before the turn counter expires. The species with the most specimens when
          time runs out wins!
        </div>
      </div>

      <div class="battlefield-container">
        <div class="title">BATTLEFIELD</div>
        <div class="text">
          Each BATTLEFIELD is a different environment and thus provide your species with a unique
          challenge. Species scripts that work for one battleground will have a different result in
          a different environment. All battlefields are comprise of these four elements: OPEN SPACE
          - These spaces are unoccupied and a bug can move freely through this environment. Attack
          and Eat commands are ineffective on these squares. BUGS - Like your unique species,
          opponent bugs are programmed according to premade scripts allowing for unique behavior.
          Each bug’s main objective is to attack opposing bugs and reproduce itself to victory.
          WALLS - Physical barriers found throughout the battle field that obstruct your bug’s
          movement towards food and other bugs. Attack, Eat and Move commands will have no effect on
          these spaces and will result in a spent turn. FOOD - Food is also located throughout the
          battlefield and provides your bugs with the opportunity to increase their numbers.
          Executing the EAT command on a food element will spawn +1 bugs to your species. Bugs
          attacked using the ATTACK command will consequently become food and can then be eaten to
          generate more of your bug’s species.
        </div>
      </div>
      <div class="script-editor-container">
        <div class="title">SCRIPT EDITOR</div>
        <div class="text">
          The SCRIPT EDITOR functions as a compiler for user-input code, converting commands into
          bytecode values to be interpreted by your bug species. User input is entered into the
          upper half green section of the script editor. Once ready to be compiled, press the
          GENERATE button to convert into bytecode. Scripts can be uniquely named and using the
          CONFIRM button. Scripts may also be saved by pressing the SAVE button after the command
          list has been processed. These scripts can be saved as is or later modified for use in
          future battles through the species selector.
        </div>
      </div>
      <div class="species-script-container">
        <div class="title">SPECIES SCRIPTS</div>
        <div class="text">
          Scripts are how you code your species’ unique behavior. Generating your species script
          will make use of the following elements: COMMENTS are lines prefixed with an omission
          symbol (#) and will not be converted into bytecode when the script is generated. Comments
          will not be executed by your species’ script. LABELS such as EAT or ATTACK will act as
          markers for your script to jump to when executing a CONTROL STATEMENT. LABELS are made
          distinguishable using numbers, capital letters, and underscoring. ACTION STATEMENTS are
          moves executed when a bug encounters food, enemy, wall, or an open space. When the
          specific element is encountered according to your action statement, the script will jump
          to it’s respective label and execute the presented code. CONTROL STATEMENTS use a LABEL to
          determine where to go next in your species’ script and are conditionally executed based on
          their purpose and context.
        </div>
      </div>
    </div>
    <button id="lobby-button">
      BACK TO LOBBY
    </button>
  </div>
</template>

<script>
export default {}
</script>


<style scoped>
#lobby-button{
  border: solid purple 3px;
  width: 700px;
  height: 100px;
  background-color: #e55300;
  border-radius: 10px;
  font-size: 40px;
  font-family: Michroma;
  color: black;
  font-weight: 400;
  word-wrap: break-word;
 

}

.title {
  text-align: center;
  color: #e55300;
  font-size: 16px;
  font-family: Michroma;
  font-weight: 400;
  word-wrap: break-word;
}

.text {
  color: white;
  font-size: 16px;
  font-family: Michroma;
  font-weight: 400;
  word-wrap: break-word;
  width: 825px;
  height: auto;
  text-justify: inter-word;

}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1050px;
  height: 1400px;
  /* border: solid red 3px; */
  margin-top: 50px;
  align-content: center;
  
 
  

  
}

#HTP-container {
  display: flex;
  flex-direction: column;
  width: 1150px;
  height: 1650px;
  background: rgba(10, 17, 28, 0.6);
  border-radius: 30px;
  /* border: chartreuse 3px solid; */
  align-items: center;
  gap: 50px;
  /* justify-content: center; */
 
}

#objective-title{
  padding-top: 40px;
}

.objective-container {
  display: flex;
  justify-content: space-between;
  /* border: solid blue 3px; */
}

.battlefield-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  /* border: solid red 3px; */
}

.script-editor-container {
  display: flex;
  justify-content: space-between;
  /* border: solid green 3px; */
}

.species-script-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  /* border: solid yellow 3px; */
}
</style>
