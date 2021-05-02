export default {
    state: {
        name: 'huang',
        password: 'vue2020',
        avatar: 'avatar.png'
    },
    mutations: {
        updatePass (state, newPass) {
            state.password = newPass
        },
        updatePassAsync (state, newAvatar) {
            state.avatar = newAvatar
        }
    },
    getters: {
        hello (state) {
            return 'hello ' + state.name
        },
        fullName (state, getters, rootState) {
            return state.name + getters.hello + rootState.spend
        }
    },
    // 通过dispatch，执行actions里的方法
    // 此处执行的commit针对是USER下的mutation
    // userObj.rootState 使用store下的所有state
    // userObj.rootGetters 使用store下的所有getters
    actions: {
        asyncChangePass (userObj,newAvatar) {
            console.log(userObj);
            setTimeout(() => {
                userObj.commit('updatePassAsync',newAvatar)
            }, 2000)
        }
    }
}