<template>
  <div>
    <div id="register">
      <h1>Create Account</h1>
      <form v-on:submit.prevent="register">
        <div id="fields">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            v-model="user.username"
            autofocus
          />
          <span
            class="err-msg"
            v-if="v$.user.username.$errors && v$.user.username.$errors.length > 0"
          >
            {{ v$.user.username.$errors[0].$message }}
          </span>
          <span class="err-msg" id="username-err" v-if="throwUsernameError === true"
            >USERNAME EXISTS</span
          >

          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Email" v-model="user.email" />
          <span class="err-msg" v-if="v$.user.email.$error">
            {{ v$.user.email.$errors[0].$message }}
          </span>
          <span class="err-msg" id="email-err" v-if="throwEmailError === true">EMAIL EXISTS</span>

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" v-model="user.password" />
          <span class="err-msg" id="password-err" v-if="v$.user.password.$error">
            {{ v$.user.password.$errors[0].$message }}</span
          >

          <label for="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            v-model="confirmPassword"
          />
          <span class="err-msg" id="confirmPassword-err" v-show="v$.confirmPassword.$error">
            passwords do not match</span
          >

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
import UserService from '@/services/users'
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      confirmPassword: '',
      existingUsers: [],
      throwUsernameError: false,
      throwEmailError: false
    }
  },
  setup() {
    const v$ = useValidate()
    return { v$ }
  },
  validations() {
    return {
      user: {
        username: { required, minLength: minLength(3) },
        email: { required, email },
        password: { required, minLength: minLength(6) }
      },
      confirmPassword: { required, sameAs: sameAs(this.user.password) }
    }
  },
  methods: {
    error(msg) {
      alert(msg)
    },
    success(msg) {
      alert(msg)
    },
    async checkUsername() {
      if (this.user.username) {
        try {
          await UserService.getUsers().then((resp) => {
            this.existingUsers = resp.data
            const usernameExists = this.existingUsers.some(
              (existingUser) =>
                existingUser.username.toLowerCase() === this.user.username.toLowerCase()
            )
            if (usernameExists) {
              this.throwUsernameError = true
              this.$v.user.username.$touch()
              this.$v.user.username.$error = true
              return false
            } else {
              this.throwUsernameError = false
              this.$v.user.username.$reset()
              return true
            }
          })
        } catch (error) {
          this.error('Something went wrong. Please try again')
        }
      }
    },

    async checkEmail() {
      if (this.user.email) {
        try {
          await UserService.getUsers().then((resp) => {
            this.existingUsers = resp.data
            const emailExists = this.existingUsers.some(
              (existingUser) => existingUser.email.toLowerCase() === this.user.email.toLowerCase()
            )
            if (emailExists) {
              this.throwEmailError = true
              this.$v.user.email.$touch()
              this.$v.user.email.$error = true
              return false
            } else {
              this.throwEmailError = false
              this.$v.user.email.$reset()
              return true
            }
          })
        } catch (error) {
          this.error('Something went wrong. Please try again')
        }
      }
    },

    async register() {
      await this.checkUsername()
      await this.checkEmail()

      this.v$.$validate()
      if (
        !this.v$.$pending &&
        !this.v$.$error &&
        this.throwUsernameError === false &&
        this.throwEmailError === false
      ) {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status === 201) {
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
      } else {
        this.error('Error: Please review your information')
      }
    }
  }
}
</script>
<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 0.375rem;
  background-color: #ffffff;
}
#fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.err-msg {
  color: red;
}
</style>
