// is_userDetail

const state = {
    is_userDetail : false,
    modalStatus   : true
};

const getters = {
    getUserDetailStatus(){
        return state.is_userDetail;
    },
    getUserModalStatus(){
        return state.modalStatus;
    }
};
const mutations = {
    setUserDetailStatus(state, new_status){
        state.is_userDetail = new_status;
    },
    setUserModalStatus(state, new_modal_status){
        state.modalStatus = new_modal_status;
    }
};


export default{
    state,
    mutations,
    getters

}