import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations"
import getters from "@/store/getters"
import actions from "@/store/actions"
import USER from '@/store/modules/USER'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spend: 1000,
    students: [
      {id: 1, name: 'kevin', age: 18},
      {id: 2, name: 'eric', age: 35},
      {id: 3, name: 'jian', age: 28},
      {id: 4, name: 'xin', age: 24},
    ],
    lastName: 'jian'
  },
  mutations,
  getters,
  actions,
  modules: {
    USER
  }
})




// 模拟许多网络请求 https://httpbin.org/


// 【创建 axios 实例】
// const axiosInstance = axios.create({
//     baseURL: 'https://httpbin.org',
//     timeout: 5000,
// })
//
// axiosInstance({
//     url: '',
// }).then(result => {
//     console.log(result.data);
// })


/*// 【以下使用了全局axios】

axios.defaults.baseURL = 'https://httpbin.org/'
axios.defaults.timeout = 5000

axios({
  url: 'https://httpbin.org/'
  // method: 'post' || 'get'
}).then( result => {
  console.log(result);
})

axios({
  url: 'https://httpbin.org/image'
  type: 'type
  params: {  // 专门针对get请的参数拼接
    type: 'pop',
    page: 1,
    id: 5
  }
}).then(result => {
  console.log(result);
})


// 并发请求
axios.all([
    axios({
      url: 'https://httpbin.org/',
      type: 'post',
      data: {  // 专门针对get请的参数拼接
        page: 5,
        id: 2514
      }
    }),
    axios({
      url: 'https://httpbin.org/',
    })
]).then((result ,result2 ) => {
  console.log(result)
  console.log(result2)
})*/
