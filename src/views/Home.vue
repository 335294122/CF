<template>
  <div class="home">
    <h1>
      <p>{{ $store.state.counter }}</p>
      <button @click="increment">增加</button>

      <button @click="decrement">减少</button>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>
