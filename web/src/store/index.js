import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SelectedCell: null,
  },
  getters: {
    SelectedCell(state) {
      return state.SelectedCell
    },
  },
  mutations: {
    SelectedCell(state, NewVal) {
      state.SelectedCell = NewVal
    }
  },
})