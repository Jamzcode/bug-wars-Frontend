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
  height: 100vh;
}

</style>