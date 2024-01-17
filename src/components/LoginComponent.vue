<template>
  <div class="login-box">
    <h2>Login</h2>
    <form id="login-form">
      <div class="user-box">
        <input type="text" name="" required="" v-model="user.username" id="username" />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required="" v-model="user.password" id="password" />
        <label>Password</label>
      </div>

      <div><PrimeButton id="prime-button" label="Login" v-on:click="login" /></div>
    
    </form>
  </div>
  <!-- <div>
    <div class="login">
      <div class="welcome-banner">Welcome Back</div>

      Username:<input type="text" id="username" placeholder="username" />

      Password:<input type="text" id="password" placeholder="password" /> 
      <button type="submit" id="login-button">Login</button>
    </div>
  </div> -->
  <Toast />
</template>

<script>
import authService from '@/services/AuthService'
import Toast from 'primevue/toast'
import PrimeButton from 'primevue/button'
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
  },
  methods: {
    async login() {
      authService
        .login(this.user)
        .then((response) => {
          console.log(this.user)
          if (response.status === 200) {
            this.$toast.add({
              severity: 'success',
              summary: 'Login successful',
              detail: 'Login successful! Redirecting...',
              life: 5000
            })
            //Confirm user was logged in
            console.log('You did it!!')
          }
          setTimeout(() => {
            this.$router.push({
              path: '/'
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
    }
  }
}
</script>

<style>
/* html{
  height: 100%;
  background: linear-gradient(#141e30, #243b55);
  color: white;
}
.login{
}

#login-button{
  margin: 30px;

} */

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
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
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow:
    0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

#prime-button{
  width: 200px;
  border: solid red 3px;
}
</style>
