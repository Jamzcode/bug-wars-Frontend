<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"> Home </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style></style>
