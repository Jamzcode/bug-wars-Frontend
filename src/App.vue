<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"> Home |</RouterLink>
        <RouterLink to="/login"> Login |</RouterLink>
        <RouterLink to="/register"> Register </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
