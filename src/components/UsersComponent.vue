<template>
  <div>
    <h1>My Users</h1>
    <button type="button" v-on:click="getUsers()">click to view users</button>
    <p>All users: {{ users }}</p>
    <button type="button" v-on:click="getUserById(1)">click to view first user</button>
    <p>one user: {{ user }}</p>
  </div>
</template>
<script>
import UserService from '@/services/users'
export default {
  data() {
    return {
      users: [],
      user: ''
    }
  },
  methods: {
    getUsers() {
      UserService.getUsers()
        .then((resp) => {
          this.users = resp.data
          alert('User has been fetched')
        })
        .catch((error) => {
          alert(error)
        })
    },
    getUserById(id) {
      UserService.getUserById(id)
        .then((resp) => {
          this.user = resp.data
          alert('User has been fetched')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
