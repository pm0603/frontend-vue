
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
    setModalStage(state, new_modal_stage){
        state.modalStage = new_modal_stage;
    }
};


export default{
    state,
    getters,
    mutations,
}