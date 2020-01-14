<template>
  <div class="list is-hoverable">
    <router-link :to="'/user/'+user.id" class="list-item">User {{user.name}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>