<template>
      <div class="modal detail" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop>
            <!-- 로딩 -->
            <div v-show="loading" class="login load">
                <i class="fa fa-ticket fa-4x loading" aria-hidden="true"></i>
            </div>    
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
                passwordCheck   : '',
                loading         : false

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
                this.loading = true;

                var _this = this;
                let passwordData = new FormData(this.$refs.passwordForm);

                axios.post('/user/password/change/', passwordData,{
                    headers: { 'Authorization': 'Token '+localStorage.token },
                    auth: {
                        username: localStorage.email,
                        password: _this.beforePwd
                    }
                })
                .then(function(response){
                    if( response.data.success ){
                        _this.loading = false;

                        _this.beforePwd        = '';
                        _this.afterPwd         = '';
                        _this.afterPwdSecond   = '';

                        _this.$store.commit('setUserDetailStatus',false);
                        window.alert('비밀번호가 수정되었습니다.');

                    } else if( response.data.detail ){
                        _this.loading = false;
                        _this.alert_message = '비밀번호가 맞지않습니다. 다시 입력해주세요.';

                        _this.beforePwd        = '';
                        _this.afterPwd         = '';
                        _this.afterPwdSecond   = '';
                    }

                });
                
            }
            
        }
    }
</script>