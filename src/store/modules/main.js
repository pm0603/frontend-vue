// Main View

const state = {
    title : 'Live your city',
};

const getters = {
  getMainTitle(){
      return state.title;
  },

};

const mutations = {
    setMainTitle(state, new_title){
        if(!new_title){ new_title = "회원";}
        state.title = new_title + '님, 환영합니다!';
    },

};


export default{
    state,
    getters,
    mutations
}