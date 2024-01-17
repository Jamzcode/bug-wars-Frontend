import axios from 'axios'

const authService = {
  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/api/auth/register', user)
  }
}

export default authService
