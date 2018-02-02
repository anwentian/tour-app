import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  allProducts: [],
  // is show tab
  isShow: true,
  showSort: false,
  showVisaSort: false,
  // list nav clicked index
  clicked: 0,
  visaClicked: 0,
  // products list type
  type: 'outboard',
  // home page class
  classify: 'outboard',
  sort: [
    {
      id: 0,
      show: false
    },
    {
      id: 1,
      show: false
    },
    {
      id: 2,
      show: false
    }
  ],
  visaSort: [
    {
      id: 0,
      show: false
    },
    {
      id: 1,
      show: false
    },
    {
      id: 2,
      show: false
    }
  ]
}

const mutations = {
  show (state) {
    state.isShow = true
  },
  hidden (state) {
    state.isShow = false
  },
  reciveProducts (state, { products }) {
    state.allProducts = products
  },
  changeSort (state, { id }) {
    state.clicked = id
    changShow(state.sort, id)
    state.showSort = state.sort[id].show
  },
  changeVisaSort (state, { id }) {
    state.visaClicked = id
    changShow(state.visaSort, id)
    state.showVisaSort = state.visaSort[id].show
  },
  changType (state, {type}) {
    state.type = type
    console.log(state.type)
  },
  changClassify (state, {classify}) {
    state.classify = classify
  }
}

const actions = {
  show: ({ commit }) => commit('show'),
  hidden: ({ commit }) => commit('hidden'),
  changeSort: ({ commit }) => commit('changeSort'),
  getAllProducts ({commit}, products) {
    commit('reciveProducts', { products })
  }
}

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})

function changShow (type, id) {
  for (let i = 0, len = type.length; i < len; i++) {
    if (i !== id) {
      type[i].show = false
    }
  }
  type[id].show = !type[id].show
}
