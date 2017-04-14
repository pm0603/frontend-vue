/*  Login  */

const state = {
  userName    : '',
  userProfile : '',
  userInfo: {
    name  : '',
    email : '',
    profile : null
  },
  userToken   : '',
  userShowMenu : false
};

 
const getters = {
    getUserName() {
      return state.userName;
    },
    getUserProfile() {
      return state.userProfile;
    },
    getUserInfo(state){
      return state.userInfo;
    },
    getUserToken(state){
      return state.userToken;
    },
    // 로그인 후 토글되는 메뉴
    getUserShowMenu(state){
      return state.userShowMenu;
    }
    
};

const  mutations = {
    setUserName(state, new_user_name) {
      state.userName = new_user_name;
      // sessionStorage.setItem('name', new_user_name);
    },
    setUserProfile(state, new_user_profile) {
      state.userProfile = new_user_profile;
      // sessionStorage.setItem('profile', new_user_profile);
    },
    setUserToken(state, new_user_token) {
      sessionStorage.setItem(new_user_token);
    },
    setUserInfo(state, new_user_info) {
      state.userInfo = new_user_info;
    },
    // 로그인 후 토글되는 메뉴
    setUserShowMenu(state, new_user_show_menu){
      state.userShowMenu = new_user_show_menu;
    }
   
    
};

export default {
  state,
  getters,
  mutations
}


