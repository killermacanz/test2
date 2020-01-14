<template>
  <nav class="nav">
    <div class="navbar-brand">
      <a @click="isActive=!isActive" :class="'navbar-burger burger' + className">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="'navbar-menu' + className">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/contact" class="navbar-item">Contact</router-link>
      <router-link to="/user" class="navbar-item">User</router-link>
      <router-link to="/chart" class="navbar-item">Chart</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    className() {
      return this.isActive ? " is-active" : "";
    }
  }
};
</script>