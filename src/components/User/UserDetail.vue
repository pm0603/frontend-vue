<template>
<div class="user-detail-wrapper">
     <user-info v-if="is_whichUserModal"></user-info>
     <user-password v-else ></user-password>
</div> 
</template>


<script>
    import UserInfo     from './UserInfo.vue';
    import UserPassword from './UserPassword.vue';

    export default{
        components: {
            userInfo     : UserInfo,
            userPassword : UserPassword
        },
        computed: {
          is_whichUserModal(){
              return this.$store.getters.getUserModalStatus;
          }  
        }
    }
</script>
