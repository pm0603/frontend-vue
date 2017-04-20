// is_userDetail

const state = {
    is_userDetail : false
};

const getters = {
    getUserDetailStatus(){
        return state.is_userDetail;
    }
};
const mutations = {
    setUserDetailStatus(state, new_status){
        state.is_userDetail = new_status;
    }
};


export default{
    state,
    mutations,
    getters

}