<template>
    <div class="modal" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop>
                <a role="button" href class="modal-prev-btn" aria-label="prev" @click.prevent="showMainModal">
                    <i class="pe-7s-angle-left" aria-hidden="true"></i>
                </a>
                <div class="modal-header">
                    <h2>회원가입</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>
                </div>
                <form enctype="multipart/form-data" method="POST" @submit.prevent="signUp" ref="form">
                <div class="modal-body">
                        <p>
                            <label for="name">이름</label>
                            <input  type="text" name="username" placeholder="이름을 입력해주세요." required v-model:name = "name" ref="username">
                        </p>
                        <p>
                            <label for="email">이메일</label>
                            <input  type="text" name="email" placeholder="이메일을 입력하세요." required v-model:email = "email" ref="email">
                        </p>
                        <p>
                            <label for="password">비밀번호</label>
                            <input type="password" name="password" placeholder="비밀번호를 입력해주세요." required v-model:password = "password" ref="password">
                        </p>
                        <p>
                            <label for="password">비밀번호</label>
                            <input type="password" name="password2" placeholder="비밀번호를 확인해주세요." v-model = "passwordCheck" class="password2" v-model:passwordtwo="passwordtwo">
                        </p>
                </div>
                <div class="modal-footer">
                    <button type="submit" @click.stop.prevent="signUp" 
                                          @keyup.enter="signUp">가입하기</button>
                </div>
                </form>
            </div>
    </div>
</template>
<style lang="scss">
    .modal-header{
        padding-bottom: 4rem;
    }
</style>
<script>
    export default{
        data(){
            return{
                result_fail     : true,
                main_message    : '',
                alert_message   : '',
                name            : '',
                email           : '',
                password        : '',
                passwordtwo     : '',
                passwordCheck   : ''
                
            }
        },
        watch: {
            passwordCheck(new_password){
                this.alert_message = '체크중..';
                this.alert_message = this.password !== new_password ? '비밀번호가 일치하지 않습니다.' : '';
            }
        },
        methods: {
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setModalStatus',false);
            },
            showMainModal(){
                this.$store.commit('setModalStage', 1);
            },
            // 회원가입
            signUp(){
                var _this = this;
                let signData = new FormData(this.$refs.form);

                    axios.post('/user/signup/', signData)
                         .then(function(response){
                                console.log('응답토큰:',response);
                            // 회원정보 저장
                                let userInfo = {
                                    "name"      :   _this.name, 
                                    "email"     :   _this.email,
                                    "profile"   :   null
                                };

                                _this.$store.commit('setUserInfo',      userInfo);
                                _this.$store.commit('setModalStatus',   false );

                                window.alert(response.data.success + ' 인증을 하시면 서비스를 이용하실수 있습니다.');
                                // 모달 닫히기
                                _this.name  = '';
                                _this.email = '';
                                _this.password    = '';
                                _this.passwordtwo = '';

                                _this.$store.commit('setUserLoginStatus', true );
                                _this.$router.push({ path: '/'});
                            
                        })
                        .catch(function(error){
                            if(error.response.status === 400){
                                 _this.alert_message = '이미 존재하는 email 입니다.';
                            }else{
                                _this.alert_message  = 'Network Error';
                            }
                            _this.name          = '';
                            _this.password      = '';
                            _this.passwordtwo   = '';
                            
                        });
            }
           
        }
    }

</script>
