<template>
  <div class="page">
    <h1>axios</h1>
    <hr>
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script>
import { request } from '@/network/request'

export default {
  name: "HiAxios",
  data () {
    return {
      result: ''
    }
  },
  created() {

    // 【采用 Promise 的方式】
    request({
      url: '/'
    }).then(result => {
      this.result = result
    }).catch(error => {
      this.result = error
    })

    //【采用回调函数的方式】
    /*request({
      url: '/'
    }, result => {
      this.result = result
    },error => {
      this.result = error
    })*/
  }
}
</script>

<style scoped>

</style>