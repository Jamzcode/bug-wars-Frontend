import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_REMOTE_API,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    // Add any other necessary headers
  }
})

export default {
  getUsers() {
    return api.get(`/users/all`)
  },
  getUserById(id) {
    return api.get(`/users/${id}`)
  }
}
