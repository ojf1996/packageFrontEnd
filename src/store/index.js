import Vue from 'vue'
import Vuex from 'vuex'
import { addPackage, loadAllPackage, updatePackage, filterPackage } from '@/apis/package'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: []
  },
  mutations: {
    LOAD_PACKAGES (state, items) {
      state.packages = items
    }
  },
  actions: {
    async addNewPackage ({ commit }, item) {
      await addPackage(item)
    },
    async loadAllPackages ({ commit }) {
      const result = await loadAllPackage()
      commit('LOAD_PACKAGES', result.data)
    },
    async updatePackage ({ commit }, { id, data }) {
      await updatePackage(id, data)
    },
    async filterPackage ({ commit }, status) {
      const result = await filterPackage({ status: status })
      commit('LOAD_PACKAGES', result.data)
    }
  },
  getters: {
    packages: state => state.packages
  }
})
