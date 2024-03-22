<template>
  <div class="component-window">
    <HowToPlayComponentVue/>
  </div>
</template>

<script>
import HowToPlayComponentVue from '@/components/HowToPlayComponent.vue'
export default {
components: {HowToPlayComponentVue},
}
</script>

<style scoped>
.component-window{
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

</style>