<template>
  <div class="page">
    <h1>Vuex</h1>
    <hr>
    <h2>
      Call store modules obj
      <p>{{ $store.getters.fullName }}</p>
      <p>pass: {{ $store.state.USER.password }}</p>
      <input type="text" v-model="password" />
      <button @click="updatePassword">update password</button>
      <br><br>

      <p>{{ $store.state.USER.avatar }}</p>
      <input type="text" v-model="newAvatar" />
      <button @click="asyncChangeAvatar">async avatar update</button>
      <hr>

      <p>{{ $store.state.spend }}</p>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
      <p>
        <input type="text" v-model="customAddNum" placeholder="place enter increment number" />
        <button @click="customNum(customAddNum)">自定义增加100</button>
      </p>
    </h2>

    <button @click="updateSpend"> 模拟异步操作 改变spend为2000 </button>
    <HiVuexTest></HiVuexTest>
  </div>
</template>

<script>
import HiVuexTest from "@/components/HiVuexTest"

// INCREMENT 使用了 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
import {INCREMENT} from "@/store/constant";

export default {
  name: "HiVuex",
  data: function () {
    return {
      customAddNum: 0,
      password: this.$store.state.USER.password,
      newAvatar: this.$store.state.USER.avatar
    }
  },
  components: {
    HiVuexTest
  },
  methods: {
    [INCREMENT] () {
      this.$store.commit(INCREMENT)
    },
    decrement () {
      this.$store.commit('decrement')
    },
    customNum (customAddNum) {
      this.$store.commit('customChange',customAddNum)
    },
    updateSpend () {
      this.$store.dispatch('updateSpend')
    },
    updatePassword () {
      this.$store.commit('updatePass', this.password)
    },
    asyncChangeAvatar () {
      this.$store.dispatch('asyncChangePass', this.newAvatar)
    }
  }
}
</script>

<style scoped>

</style>