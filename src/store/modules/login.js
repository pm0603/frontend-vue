import * as types from '../mutation-types'

const state = {
  userName : '',
  userProfile: '',
  userInfo: {
    name: '',
    profile: ''
  },
  userToken: ''
};
 
const getters = {
    getUserName() {
      return sessionStorage.name;
    },
    getUserProfile() {
      return sessionStorage.profile;
    },
    getUserInfo(state){
      return state.userInfo;
    },
    getUserToken(state){
      return sessionStorage.getItem(state.userToken);
    }
};

const  mutations = {
    setUserName(state, new_user_name) {
      state.userName = new_user_name;
      sessionStorage.setItem('name', new_user_name);
    },
    setUserProfile(state, new_user_profile) {
      state.userProfile = new_user_profile;
      sessionStorage.setItem('profile', new_user_profile);
    },
    setUserInfo(state, {new_user_info}) {
      state.userInfo = {new_user_info};
    },
    setUserToken(state, new_user_token) {
      sessionStorage.setItem(new_user_token);
    }
    
};

export default {
  state,
  getters,
  mutations
}

// const state = {
//   main: 0
// }

// const mutations = {
//   [types.DECREMENT_MAIN_COUNTER] (state) {
//     state.main--
//   },
//   [types.INCREMENT_MAIN_COUNTER] (state) {
//     state.main++
//   }
// }

