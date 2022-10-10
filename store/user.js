export const state = () => ({
  userInfo: {
    email: null,
    roles: null,
    token: null
  }
})

export const getters = {
  getUser (state) {
    return state.userInfo
  }
}

export const mutations = {
  LOGIN (state, userInfo) {
    state.userInfo = userInfo
  }
}

export const actions = {
  async login ({ commit }, req) {
    const res = await this.$axios.post('/api/user/login', req).then((_res) => {
      commit('LOGIN', res)
    })
  }
}
