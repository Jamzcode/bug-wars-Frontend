<template>
  <div>
    <h2>Register an account</h2>
    <router-link v-bind:to="{ name: 'login' }">Sign in!</router-link>
    <register-component />
  </div>
</template>
<script>
import RegisterComponent from '@/components/RegisterComponent.vue'
export default {
  components: { RegisterComponent }
}
</script>
<style></style>
