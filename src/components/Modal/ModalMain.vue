
<template>
    <div class="modal">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content-md" @click.stop="tempStopPropagation">
                <a role="button" href class="modal-prev-btn" aria-label="content" @click.prevent="closeModal"><i class="ss-delete" aria-hidden="true"></i></a>
                <div class="modal-header">
                    <h2>로그인</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p class="result-fail" v-else>{{alert_message}}</p>
                </div>
                <div class="modal-body">
                    <div class="social-login">
                        <p><button type="button" @click.prevent="facebookLogin" >페이스북으로 로그인하기</button></p>
                    </div>
                    <div class="basic-login">
                        <p>
                            <label for="email">email</label>
                            <input  type="text" name="email" placeholder="email" v-model:email = "email">
                        </p>
                        <p>
                            <label for="password">password</label>
                            <input type="password" name="password" placeholder="password" v-model:password = "password">
                        </p>
                    </div>
                    <div class="login-detail">
                        <p>
                            이메일로 회원가입하시겠어요?
                            <a href v-on:click.prevent="showSignUpModal">회원가입 하기</a>
                        </p>
                        <p>
                            비밀번호를 잊어버리셨나요? 
                            <a href v-on:click.prevent="showFindPwdModal">비밀번호 찾기</a>
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href @click.stop.prevent="login">login</a>
                </div>
            </div>
    </div>
</template>
<script>
    import FacebookLogin from './facebookLogin.js';
    export default{
        data(){
            return{
                email: '',
                password: '',
                result_fail: false,
                user_name: '',
                main_message: '',
                alert_message: '아이디 또는 비밀번호를 다시 확인하세요.',
                user_profile: ''
            }
        },
        methods: {
            tempStopPropagation() {
                console.log('click');
            },
            closeModal(event){
                event.stopPropagation();
                var is_Open = false;
                // event.stopImmediatePropagation();
                this.$emit('closeModal',is_Open);
            },
            showSignUpModal(){
                this.$emit('showSignUpModal');
            },
            showFindPwdModal(){
                this.$emit('showFindPwdModal');
            },
            login(val){
                var _this = this;

                axios.post('/user/login',{
                            email : this.email,
                            password : this.password
                    }).then(function(response) {
                        'use strict';
                        var data = response.data[0];
                        if(data){
                            // 아이디와 비번이 맞으면 첫번째 페이지로 이동하기
                            console.log('환영합니다.');
                            // [ 세션 유지 하기 ]
                            console.log('name:',data.name);
                            // sessionStorage.setItem('email',data.name);
                            user_name = data.name;
                            // 회원아이디나 이름을 가지고 가서 창이 꺼지면 거기에 회원님 반갑습니다 가 나오게 하기

                            _this.closeModal();
                        } else {
                            console.log('회원정보가 없습니다.');
                            _this.result_fail = true;
                        }
                    })
                    .catch(function(error) {
                        console.error(error.message);
                        _this.result_fail = true;
                        _this.alert_message = 'Network Error';
                    });
            },
            facebookLogin(){
                var _this = this;
                FB.login(function(response){

                    let data = response.authResponse;

                    FB.api('/me?fields=id,name,picture.width(100).height(100).as(picture_small)', function(response) {
                        console.log('FB-api:',response);
                        let profile = response.picture_small.data.url;
                        let userName = response.name;

                        _this.user_profile = profile;
                        _this.user_name = userName;
                        if( response === null ){
                        console.log('status-response:',response);
                        } else {
                        console.log('로그인이 되어 있고 앱등록도 되어있음 앞으로 페이지 이동');
                        }
                    });
                 
                    // 서버로 토큰값과 아이디 보내기
                    axios.post('https://pm-824c9.firebaseio.com/member.json',{
                                token : data.accessToken,
                                id : data.userID
                        }).then(function(responseData) {
                            // 'use strict';
                            console.log(responseData.statusText);
                            if(responseData.statusText === "OK"){
                                // 아이디와 비번이 맞으면 첫번째 페이지로 이동하기
                                console.log('환영합니다.');
                                console.log('this:',_this);
                                _this.isFacebookLogin();
                            } else {
                                // 다르다고 알람 띄워주기
                                console.log('회원정보가 없습니다.');
                            }
                        }).catch(function(error) {
                            console.log('모달실패');
                            console.error(error.message);
                        });

                },{scope: 'public_profile,email'});
            },
            isFacebookLogin(){
                console.log('isFacebookLogin');
                this.$emit('isFacebookLogin',this.user_name, this.user_profile);
            }
            
        }
    }
</script>


<style lang="sass">
    .ss-delete
        font-size: 30px
        color: #2e2f33
</style>