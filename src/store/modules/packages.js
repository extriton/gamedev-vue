import Packages from '@/api/packages'

const namespaced = true

const state = {
  packages: [],
  page: 1,
  maxPage: 0,
  searchString: ''
}

const getters = {
  PACKAGES: state => {
    return state.packages
  },
  PAGE: state => {
    return state.page
  },
  MAX_PAGE: state => {
    return state.maxPage
  },
}

const mutations = {
  SET_PACKAGES_LIST: (state, payload) => {
    state.packages = payload
  },
  SET_PAGE: (state, payload) => {
    state.page = payload
  },
  SET_MAX_PAGE: (state, payload) => {
    state.maxPage = payload
  },
  SET_SEARCH_STRING: (state, payload) => {
    state.searchString = payload
  }
}

const actions = {
  GET_PACKAGES_LIST ({ commit, state }) {
    return new Promise((resolve, reject) => {
      Packages.searchPackages(state.searchString, state.page)
        .then(response => {
          commit('SET_PACKAGES_LIST', response.data.objects)
          commit('SET_MAX_PAGE', Math.ceil(response.data.total / 10))
          resolve(response)
        })
        .catch(err => {
          commit('SET_PACKAGES_LIST', [])
          commit('SET_MAX_PAGE', 0)
          reject(err)
        })
      })
  }
}

export default {
  state, getters, mutations, actions, namespaced
} 