<template>
  <div id="script-editor-container">
    <script-editor-component/>
  </div>
</template>

<script>
import ScriptEditorComponent from '../components/ScriptEditorComponent.vue';

export default {
components: { ScriptEditorComponent }
}
</script>

<style scoped>
#script-editor-container{
  display: flex;
  justify-content: center;
  
  height: 100vh;
  border: solid red 3px;
}
</style>