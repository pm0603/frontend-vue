<template>
      <div class="modal detail" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop>
                <a role="button" href class="modal-close-btn" aria-label="content" @click.prevent="closeModal">
                    <span class="pe-7s-close" aria-hidden="true"></span>
                </a>
                <div class="modal-header">
                    <h2>비밀번호 수정</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>
                </div>
                <form enctype="multipart/form-data" method="POST" @submit.prevent="findPwd" ref="passwordForm">
                    <div class="modal-body">
                        <p>
                            <label for="name">password</label>
                            <input type="password" name="beforePassword" placeholder="비밀번호를 입력하세요." v-model:beforePwd="beforePwd" required ref="beforePwd">
                        </p>
                        <p>
                            <label for="email">new password</label>
                            <input type="password" name="password" placeholder="새로운 비밀번호를 입력하세요." v-model:afterPwd= "afterPwd" required ref="pwd">
                        </p>
                        <p>
                            <label for="email">new password</label>
                            <input type="password" name="password" placeholder="새로운 비밀번호를 입력하세요." v-model:afterPwdSecond="afterPwdSecond" v-model= "passwordCheck" required ref="pwdSecond" >
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" @click.stop.prevent="findPwd"
                                              @keyup.enter="findPwd">비밀번호 수정하기</button>
                    </div>
                </form>
            </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                email       : '',
                beforePwd   : '',
                afterPwd    : '',
                afterPwdSecond   : '',

                result_fail     : true,
                main_message    : '',
                alert_message   : '',
                passwordCheck   : ''

            }
        },
        watch: {
            passwordCheck(new_password){
                this.alert_message = '체크중..';
                this.alert_message = this.afterPwd !== new_password ? '비밀번호가 일치하지 않습니다.' : '';
            }
        },
        methods: {
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setUserDetailStatus',false);
                this.$store.commit('setModalStatus',false);
                this.$store.commit('setUserModalStatus', true);
            },
            findPwd(){
                var _this = this;
                let passwordData = new FormData(this.$refs.passwordForm);

                axios.post('/user/password/change', passwordData, {
                    headers: { 'Authorization': 'Token '+localStorage.token },
                    auth: {
                        username: localStorage.email,
                        password: _this.beforePwd
                    }
                })
                .then(function(response){
                    console.log('response:',response);


                });
            }
            
        }
    }
</script>