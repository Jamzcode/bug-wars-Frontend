import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_REMOTE_API
})

export default {
  getUsers() {
    return api.get(`/users/all`)
  },
  getUserById(id) {
    return api.get(`/users/${id}`)
  }
}
