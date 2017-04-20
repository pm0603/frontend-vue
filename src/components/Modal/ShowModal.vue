<template>
    <section>
        <h1 class="modal-heading">modal window</h1>
        <modal-main             v-if      = "is_whichModal === 1"></modal-main>
        <modal-sign-up          v-else-if = "is_whichModal === 2"></modal-sign-up>
    </section>
</template>

<script>
    import ModalMain from './ModalMain.vue';
    import ModalSignUp from './ModalSignUp.vue';

    export default{
        components: {
            modalMain:   ModalMain,
            modalSignUp: ModalSignUp,
        },
        computed: {
          is_whichModal(){
              return this.$store.getters.getModalStage;
          }  
        }
    }
</script>
