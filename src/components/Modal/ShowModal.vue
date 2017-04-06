<template>
    <section>
        <h1>modal window 02</h1>
        <modal @closeModal="closeModal"></modal>
    </section>
</template>

<script>
    import Modal from './Modal.vue';
    export default{
        data(){
            return{
                
            }
        },
        components: {
            modal: Modal
        },
        methods: {
            closeModal: function(isOpen){
                console.log('show-modal의 closeModal');
                console.log('openModal:'+isOpen);
                // emit시 부모에게 이 이름으로 보냄
                this.$emit('shutModal',isOpen);
            }
        }
    }
</script>

<style scoped lang="scss">
    h1{
        position: absolute;
        left: -999em;
    }

</style>