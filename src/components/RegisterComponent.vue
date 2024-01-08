<template>
  <div>
    <div id="register">
      <form v-on:submit.prevent="register">
        <h1>Create Account</h1>
        <div id="fields">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            v-model="user.username"
            required
            autofocus
          />
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Email" v-model="user.email" required />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="user.password"
            required
          />
          <label for="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            v-model="user.confirmPassword"
            required
          />
          <div>
            <button type="submit">Create Account</button>
          </div>
        </div>
        <hr />
      </form>
    </div>
  </div>
</template>
<script>
import authService from '@/services/AuthService'
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.error('Password & Confirm Password do not match')
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.success('Thank you for registering, please sign in.')
              this.$router.push({
                path: '/login'
              })
            }
          })
          .catch((error) => {
            const response = error.response
            if (!response) {
              this.error(error)
            } else if (response.status === 400) {
              if (response.data.errors) {
                // Show the validation errors
                let msg = 'Validation error: '
                for (let err of response.data.errors) {
                  msg += `'${err.field}':${err.defaultMessage}. `
                }
                this.error(msg)
              } else {
                this.error(response.data.message)
              }
            } else {
              this.error(response.data.message)
            }
          })
      }
    }
  }
}
</script>
<style scoped></style>
