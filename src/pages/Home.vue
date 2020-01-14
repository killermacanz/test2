<template>
  <div>
    <h1 class="title">Home</h1>

    <h1 :class="className">Counter: {{counter}}</h1>

    <p v-if="counter>5" class="title">Counter is too high</p>
    <p>{{className}}</p>
    <hr />
    <p v-if="counter<=5" class="title">Counter is OK</p>
    <button @click="counter+=1" class="button">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    };
  },
  computed: {
    className() {
      return this.counter <= 5 ? "has-text-primary" : "has-text-danger";
    }
  }
};
</script>