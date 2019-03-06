import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import getters from './getters'
import actions from './actions'
import state from './state'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
