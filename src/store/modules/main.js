// Main View

const state = {
    title : '공연을 좋아하나요?',
};

const getters = {
  getMainTitle(){
      return state.title;
  },

};

const mutations = {
    setMainTitle(state, new_title){
        var base = '님, 환영합니다!';
        if(!new_title){
            new_title = "회원" + base;
        }else if(new_title === 'default'){
            new_title = '공연을 좋아하나요?';
        }else{
            new_title += base;
        }
        state.title   = new_title;
    },

};


export default{
    state,
    getters,
    mutations
}
