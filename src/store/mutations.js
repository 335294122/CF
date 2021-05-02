// 通过commit()使用mutations内的方法
// 所有state对象中的属性都要通过mutations里定义方法来改变， 类似于 methods
// 不要在mutation里执行异步操作，异步操作请在actions里操作

import {INCREMENT} from "@/store/constant";

export default {
    // INCREMENT 使用了 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [INCREMENT] (state) {
        state.spend++
    },
    decrement (state) {
        state.spend--
    },
    customChange (state, num) {
        state.spend += Number(num)
    },
    insertStudent (state, student) {
        state.students.push(student)
    },
    updateInfo (state) {
        state.spend = 2000
    }
}