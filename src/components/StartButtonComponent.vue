<template>
  <div class="start-button">
    <button>START</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  width: 200px;
  height: 55px;
  border-radius: 10px;
  background: #e55300;
  justify-content: center;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-style: normal;
  border: none;
  cursor: pointer;
  margin-top: 30px;
}

button:hover{
  background:goldenrod;
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
