import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import login from './modules/login';
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules:{
      login
  }

})

// const store = new Vuex.Store({
//   state: {
//     user: {
//       name: 'Jee Hoon'
//     }
//   },
//   getters: {
//     getUserInfo(state) {
//       return state.user;
//     }
//   },
//   mutations: {
//     setUserInfo(state, new_user_info) {
//       state.user = new_user_info;
//     }
//   }
// });