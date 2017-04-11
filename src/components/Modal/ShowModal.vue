<template>
    <section>
        <h1 class="modal-heading">modal window</h1>
        <modal-main   v-if="is_whichModal === 1"
                      @closeModal = "closeModal"
                      @showSignUpModal  = "showSignUpModal"
                      @showFindPwdModal = "showFindPwdModal"
                      @isFacebookLogin  = "isFacebookLogin" ></modal-main>
        <modal-sign-up v-else-if = "is_whichModal === 2"
                      @closeModal    = "closeModal"
                      @showMainModal = "showMainModal"></modal-sign-up>
        <!--비밀번호찾기-->
        <modal-find-password v-else
                             @closeModal    = "closeModal"
                             @showMainModal = "showMainModal"></modal-find-password>
    </section>
</template>

<script>
    import ModalMain from './ModalMain.vue';
    import ModalSignUp from './ModalSignUp.vue';
    import ModalFindPwd from './ModalFindPwd.vue';

    export default{
        data(){
            return{
                is_whichModal : 1

            }
        },
        components: {
            modalMain: ModalMain,
            modalSignUp: ModalSignUp,
            modalFindPassword: ModalFindPwd
        },
        methods: {
            closeModal(isOpen){
                this.$emit('shutModal',isOpen);
            },
            showMainModal(){
                this.is_whichModal = 1;
            },
            showSignUpModal(){
                this.is_whichModal = 2;
            },
            showFindPwdModal(){
                this.is_whichModal = 3;
            },
            isFacebookLogin(name, profile){
                // 회원정보값던져주기
                this.$emit('isFacebookLogin',name, profile);
            }
        }
    }
</script>
