
/*  Modal  */

const state = {
    modalOpenStatus : false,
    modalStage      : 1 
};

const getters = {
  getModalStatus(){
      return state.modalOpenStatus;
  },
  // 모달창의 위치를 반환하는 getter
  getModalStage(){
    return state.modalStage;
  }  
};

const mutations = {
    setModalStatus(state, new_is_open){
        state.modalOpenStatus = new_is_open;
    },
    // 모달창의 위치를 반환하는 setter
    setModalStage(stage, new_modal_stage){
        stage.modalStage = new_modal_stage;
    }
};

const actions = {
    setModalStatus (context) {
      context.commit('setModalStatus');
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}