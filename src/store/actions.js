// 通过dispatch()使用actions内的方法
// 在此执行异步，然后通过传入vuexObj本身，调用mutations内的方法进行更新state的数据

export default {
    updateSpend (vuexObj) {
        setTimeout(() => {
            vuexObj.commit('updateInfo')
        },1000)
    }
}