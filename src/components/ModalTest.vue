<template>
    <!--모달테스트를 위해서 따로 빼놓은 뷰페이지-->
    <button type="button" class="signin" @click.once="openAlert"> sign up / login
        <app-show v-if="openit" @shutModal="closeModal"></app-show>
    </button>
</template>
  
<script>
   import ShowModal from './Modal/ShowModal.vue'
    export default {
        data () {
            return {
                openit : false      
            }
        },
        components: {
          appShow : ShowModal
        },
        methods: {
          openAlert: function() {
            console.log('open');
            console.log('nav의openAlert:',this.openit);
            this.openit = true;
          },
          closeModal: function(isOpen){
            console.log('nav의closeModal:',isOpen);
            
          }
        }
    }
</script>
