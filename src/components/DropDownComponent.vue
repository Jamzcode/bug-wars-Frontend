<template>
  <div class="menu-button" @click="isOpen = !isOpen">
    <fa-fa id="caret" icon="caret-down" v-if="!isOpen"></fa-fa>

    <div class="sub-menu" v-if="isOpen">


      <div v-for="(item, i) in items" :key="i" class="menu-item">

        <a href="#">{{ item.title }} @click="target" </a>
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
  },
}

</script>

<style scoped>
.sub-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;


}
.menu-button{
  background: rgba(60, 131, 141, 0.75);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: solid red 3px; */
}

.menu-button:hover{
  border: solid white 2px;
  background-color: rgb(66, 189, 193);
}

.menu-item{

  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;
  background: rgba(60, 131, 141, 0.75);
  font-family: 'Michroma', sans-serif;

}

.menu-item:hover{
  background-color: rgb(66, 189, 193);

}

a{
  text-decoration: none;
  font-weight: 300;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
}

#caret{
  color: white;
}


</style>
