import { Module } from 'vuex'
import AuthStateTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const authModule: Module<AuthStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    token: localStorage.getItem('tokenAuthenticated') ?? ''
  },
  getters: {
    getToken: (state: AuthStateTypes) => state.token
  },
  mutations: {
    LOGIN(state: AuthStateTypes) {
      state.token = 'abcd'
    }
  },
  actions: {}
}

export default authModule
