import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import modal from './modules/modal';
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      login,
      modal,
      user
  }

});
