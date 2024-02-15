<template>
  <Transition appear>
    <div id="login-box" class="login-box">

      <div> <img id="logo" src="C:\Users\james\workspace\side-projects\crusader-games\bug-wars\bug-wars-Frontend\src\assets\bugwars-logo.png" alt="logo"></div>

      <form id="login-form" @submit.prevent="login">
        <div id="fields">
          <div class="header-text">
            <h2>Login</h2>
            <h6 class="register-msg">
              Need an account?
              <RouterLink to="/register">Register here</RouterLink>
            </h6>
          </div>
          <!-- Username -->
          <div class="user-box">
            <span class="p-float-label">
              <InputText type="text" name="" required="" v-model="user.username" id="username" />
              <label for="username">Username</label>
            </span>
          </div>

          <!-- Password -->
          <div class="user-box">
            <span class="p-float-label">
              <Password
                type="password"
                name=""
                required=""
                v-model="user.password"
                id="password"
                toggleMask
                :feedback="false"
              />
              <label for="password">Password</label>
            </span>
          </div>

          <!-- Login button -->
          <div id="login-btn"><PrimeButton id="prime-button" label="Login" type="submit" /></div>
        </div>
      </form>
      <Toast />
    </div>
    <!-- <div>
    <div class="login">
      <div class="welcome-banner">Welcome Back</div>

      Username:<input type="text" id="username" placeholder="username" />

      Password:<input type="text" id="password" placeholder="password" /> 
      <button type="submit" id="login-button">Login</button>
    </div>
  </div> -->
  </Transition>
</template>

<script>
import authService from '@/services/AuthService'
import Toast from 'primevue/toast'
import PrimeButton from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    Toast,
    PrimeButton,
    InputText,
    Password
  },

  methods: {
    async login() {
      authService
        .login(this.user)
        .then((response) => {
          // console.log(this.user)
          if (response.status === 200) {
            this.$toast.add({
              severity: 'success',
              summary: 'Login successful',
              detail: 'Login successful! Redirecting...',
              life: 5000
            })
            //Confirm user was logged in
            // console.log('You did it!!')
          }
          setTimeout(() => {
            this.$router.push({
              path: '/lobby'
            })
          }, 5000)
        })
        .catch((error) => {
          const response = error.response
          if (response.status === 401) {
            this.$toast.add({
              severity: 'error',
              summary: 'ERROR',
              detail: 'Invalid username or password.',
              life: 5000
            })
            console.log('Invalid username or password.')
          }
        })
    }
  }
}
</script>

<style>

#logo{
  border-radius: 150px;
  margin-bottom: 50px;
  border: solid rgba(255, 255, 255, 0) 1px;
}

#login-box{
  flex-direction: column;
}

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

#fields {
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.login-box {
  /* position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h2 h6 {
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  color: #fff;
}

#login-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-enter-active,
.v-leave-active {
  transition:
    opacity 2s ease,
    transform 1s ease-in-out;
  transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
/* .login-box .user-box {

} */

/* .login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
} */

/* .login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
} */

/* .login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
} */

/* .login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow:
    0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
} */

/* .login-box a span {
  position: absolute;
  display: block;
} */

/* .login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
} */

/* @keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
} */

/* .login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
} */

/* @keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
} */

/* .login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
} */

/* @keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
} */

/* .login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
} */
/* 
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
} */
</style>
