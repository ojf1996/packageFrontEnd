import Vue from 'vue'
import Vuex from 'vuex'
import { addPackage } from '@/apis/package'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    async addNewPackage ({ commit }, item) {
      await addPackage(item)
    }
  }
})
