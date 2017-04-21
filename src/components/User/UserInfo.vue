<template>
      <div class="modal detail" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md detail-md" @click.stop>
                <a role="button" href class="modal-close-btn" aria-label="content" @click.prevent="closeModal">
                    <span class="pe-7s-close" aria-hidden="true"></span>
                </a>
                <div class="modal-header">
                    <h2>나의 정보</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>
                </div>
                <div class="modal-body user-detail">
                    <p>
                        <label for="name">이름 </label>
                        <input type="text" name="username" placeholder="이름" v-model="username" readonly>
                    </p>
                    <p>
                        <label for="email">이메일</label>
                        <input  type="text" name="email" placeholder="이메일" v-model= "email" readonly>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" @click.stop.prevent="findPwd"
                                          @keyup.enter="findPwd">비밀번호 수정하러가기</button>
                </div>
            </div>
     </div>
</template>


<script>
    import UserPassword from './UserPassword.vue';
    export default{
        data(){
            return{
                username        : 'username',
                email           : 'email@gmail.com',

                main_message    : '',
                alert_message   : '',
                result_fail     : true,
                showUserDetail  : true
            }
        },
        components: {
            userPassword : UserPassword
        },
        created () {
            if( localStorage ){
                this.username = localStorage.name;
            } else {
                let userInfo  = this.$store.getters.getUserInfo;
                this.username = userInfo.name;
                this.email    = userInfo.email;
            }
        },
        methods: {
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setUserDetailStatus',false);
                this.$store.commit('setModalStatus',false);
            },
            findPwd(){
                this.$store.commit('setUserModalStatus', false);
            }  
        },
            
    }

</script>
