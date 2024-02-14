<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="left-links">
          <RouterLink to="/"> Home |</RouterLink>
          <RouterLink to="/login"> Login </RouterLink>
        </div>
        <div class="right-links">
          <RouterLink to="/register"> Register | </RouterLink>
          <RouterLink to="/credits">Credits</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  font-family: 'Michroma', sans-serif;
}

nav{
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
}

.right-links{
  color: white;
}
</style>
