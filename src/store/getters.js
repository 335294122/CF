// 类似于 computed
// state对象属于需要改变再展示时，在getters里定义方法对其改变再展示
// .toFixed(2) 用在getters内会出错，放在.vue文件 filters:{}

export default {
    commission (state) {
        return (state.spend * 0.2)
    },
    screen (state) {
        return state.students.filter(item => item.age > 20)
    },
    countScreen (state, getters) {
        return getters.screen.length
    },
    screen2 (state) {
        return val => {
            return state.students.filter(item => item.age > val)
        }
    }
}