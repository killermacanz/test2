<template>
  <div>
    <h1 class="title">User Profile</h1>
    <h1 class="title">{{user}}</h1>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";
export default {
  async mounted() {
    // console.log(this.$router.params);
    // axios.get(url + "/" + this.$route.params.id).then(res => {
    //   this.user = res.data;
    // });
    const res = await axios.get(url + "/" + this.$route.params.id);
    this.user = res.data;
  },
  data() {
    return {
      user: {}
    };
  }
};
</script>