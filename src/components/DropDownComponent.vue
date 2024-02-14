<template>
  <div class="menu-button" @click="isOpen = !isOpen">

    <div class="sub-menu" v-if="isOpen">
      
        <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a href="#">{{ item.title }}</a>
        </div>
    
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'
export default {
  name: Dropdown,
  props: ['title', 'items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.sub-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
.menu-button {
  background: rgba(60, 131, 141, 0.75);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  height: 40px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid red 3px; */
}

.menu-item {
  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;
  background: rgb(170, 189, 189);
}

a {
  text-decoration: none;
  font-weight: 300;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
