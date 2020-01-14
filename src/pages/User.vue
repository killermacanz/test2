<template>
  <div>
    <h1 class="title">User</h1>

    <div :class="`modal ${isActive ? 'is-active' : ''}`">
      //is-active
      <div class="modal-background"></div>
      <div class="modal-content">
        <h1 class="title"></h1>
      </div>
    </div>

    <p>
      <button @click="getUsers()" class="button">get users</button>
    </p>

    <user-list-item v-for="(each, id) in users" :key="id" :user="each"></user-list-item>
  </div>
</template>

<script>
import axios from "axios";
import UserListitem from "../components/UserListitem";
const url = "https://jsonplaceholder.typicode.com/users";

export default {
  components: {
    "user-list-item": UserListitem
  },
  data() {
    return {
      users: [],
      isActive: false
    };
  },
  methods: {
    async getUsers() {
      // axios.get(url).then(res => {
      //   this.users = res.data;
      // });
      try {
        this.isActive = true;
        const res = await axios.get(url);
        this.users = res.data;
        this.isActive = false;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>