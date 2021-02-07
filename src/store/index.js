import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  email: '',
  statusMessage: '',
  isAuth: false,
  password: '',
  authCode: '',
  successState: null,
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
