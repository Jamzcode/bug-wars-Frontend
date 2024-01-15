<template>
  <div>
    <div id="register">
      <h1>Create Account</h1>
      <form>
        <div id="fields">
          <!-- Username -->
          <span class="p-float-label">
            <InputText
              id="username"
              v-model="user.username"
              :class="{ 'p-invalid': v$.user.username.$error }"
            />
            <label for="username">Username</label>
          </span>
          <span
            class="err-msg"
            v-if="v$.user.username.$errors && v$.user.username.$errors.length > 0"
          >
            {{ v$.user.username.$errors[0].$message }}
          </span>

          <!-- Email -->
          <span class="p-float-label">
            <InputText
              id="email"
              v-model="user.email"
              :class="{ 'p-invalid': v$.user.email.$error }"
            />
            <label for="email">Email</label>
          </span>
          <span class="err-msg" v-if="v$.user.email.$error">
            {{ v$.user.email.$errors[0].$message }}
          </span>

          <!-- Password -->
          <span class="p-float-label">
            <Password
              v-model="user.password"
              id="password"
              toggleMask
              :class="{ 'p-invalid': v$.user.password.$error }"
            >
              <label for="password">Password</label>

              <template #footer>
                <Divider />
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 6 characters</li>
                </ul>
              </template>
            </Password>
          </span>
          <span class="err-msg" id="password-err" v-if="v$.user.password.$error">
            {{ v$.user.password.$errors[0].$message }}</span
          >

          <!-- Confirm Password -->
          <span class="p-float-label">
            <Password
              v-model="confirmPassword"
              :feedback="false"
              :class="{ 'p-invalid': v$.confirmPassword.$error }"
            />
            <label for="confirmPassword">Confirm password</label>
          </span>
          <span class="err-msg" id="confirmPassword-err" v-if="v$.confirmPassword.$error">
            Passwords do not match</span
          >

          <div>
            <PrimeButton
              label="Create Account"
              icon="pi pi-check"
              iconPos="right"
              @click="register"
            />
          </div>
        </div>

        <hr />
      </form>
      <Toast />
    </div>
  </div>
</template>
<script>
import authService from '@/services/AuthService'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Toast from 'primevue/toast'
import PrimeButton from 'primevue/button'
import Divider from 'primevue/divider'
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
      usernameError: '',
      throwEmailError: false,
      emailError: ''
    }
  },
  components: {
    InputText,
    Password,
    Toast,
    PrimeButton,
    Divider
  },
  setup() {
    const v$ = useValidate()

    return { v$ }
  },
  validations() {
    return {
      user: {
        username: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
        password: { required: true, minLength: minLength(6) }
      },
      confirmPassword: { required, sameAs: sameAs(this.user.password) }
    }
  },
  methods: {
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
              this.$toast.add({
                severity: 'error',
                summary: 'Username exists',
                detail: 'Please choose a different username',
                life: 5000
              })
              return false
            } else {
              this.throwUsernameError = false
              return true
            }
          })
        } catch (error) {
          this.$toast.add({
            severity: 'error',
            summary: 'ERROR',
            detail: 'Please review your information.',
            life: 5000
          })
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
              this.$toast.add({
                severity: 'error',
                summary: 'Email exists',
                detail: 'Please choose a different email',
                life: 5000
              })
              return false
            } else {
              this.throwEmailError = false
              return true
            }
          })
        } catch (error) {
          this.$toast.add({
            severity: 'error',
            summary: 'ERROR',
            detail: 'Please review your information.',
            life: 5000
          })
        }
      }
    },

    async register() {
      await this.checkUsername()
      await this.checkEmail()

      if (
        !this.v$.$pending &&
        !this.v$.$error &&
        !this.throwUsernameError &&
        !this.throwEmailError
      ) {
        this.v$.$validate()

        authService
          .register(this.user)
          .then((response) => {
            if (response.status === 201) {
              this.$toast.add({
                severity: 'success',
                summary: 'Registration successful',
                detail:
                  'Thank you for registering. You will be redirected to sign in after 5 seconds.',
                life: 5000
              })
            }
            setTimeout(() => {
              this.$router.push({
                path: '/login'
              })
            }, 5000)
          })
          .catch((error) => {
            const response = error.response
            if (!response) {
              console.log('catch error')
            } else if (response.status === 400) {
              if (response.data.errors) {
                // Show the validation errors
                let msg = 'Validation error: '
                for (let err of response.data.errors) {
                  msg += `'${err.field}':${err.defaultMessage}. `
                }
                console.log(msg)
              } else {
                console.log(response.data.message)
              }
            } else {
              console.log(response.data.message)
            }
          })
      } else {
        //this.error('Error: Please review your information')
        this.$toast.add({
          severity: 'error',
          summary: 'ERROR',
          detail: 'Please review your information.',
          life: 5000
        })
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
  background-color: #b6afaf;
  height: 100vh;
}
#fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
}
.err-msg {
  color: red;
}
</style>
