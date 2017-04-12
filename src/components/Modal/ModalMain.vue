
<template>
    <div class="modal">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content-md" @click.stop="tempStopPropagation">
                               <a role="button" href class="modal-prev-btn" aria-label="content" @click.prevent="closeModal">
                    <span class="pe-7s-close-circle" aria-hidden="true"></span>
                </a>

                <div class="modal-header">
                    <h2>로그인</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p class="result-fail" v-else>{{alert_message}}</p>
                </div>
                                <form enctype="multipart/form-data" method="POST" @submit.prevent="doLogin" ref="loginForm">

                <div class="modal-body">
                    <div class="social-login">
                        <p><button type="button" @click.prevent="facebookLogin" >페이스북으로 로그인하기</button></p>
                    </div>
                    <div class="basic-login">
                        <p>
                            <label for="email">email</label>
                            <input  type="text" name="email" placeholder="email" required v-model:email = "email">
                        </p>
                        <p>
                            <label for="password">password</label>
                            <input type="password" name="password" placeholder="password" 
                            required v-model:password = "password">
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
                    <button type="submit"  @click.stop.prevent="doLogin">login</button>

                </div>
                </form>
            </div>
    </div>
</template>
<script>
    import FacebookLogin from './facebookLogin.js';
    export default{
        data(){
            return{
                email           : '',
                password        : '',

                main_message    : '',
                alert_message   : '',
                result_fail     : false,
                
                user_name       : '',
                user_profile    : ''

            }
        },
        methods: {
            knownUserInfo() {
                this.$store.getters.getUserInfo;
                this.$store.commit('setUserInfo', {});
            },

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
            doLogin(){
                // this.$store.commit('setUserName', 'jihyun');
                // console.log('유저:',this.$store );

                var _this = this;
                let loginData = new FormData(this.$refs.loginForm);

                axios.post('/user/login/', loginData)
                // axios.post('https://pm0603-40b23.firebaseio.com/login', loginData)
                     .then(function(response) {

                        let data = response.data;
                        if( data ){
                            // set user id
                            // _this.$store.commit('setUserName', _this.user_name);
                            // save in sessionStorage
                            _this.$store.commit('setUserToken', data.token);
                            sessionStorage.setItem("id",    _this.user_name);
                            // sessionStorage.setItem("token", data.token);
                            console.log('sessionStorage:',sessionStorage);

                            // 회원아이디나 이름을 가지고 가서 창이 꺼지면 거기에 회원님 반갑습니다 가 나오게 하기
                            _this.login.commit('setUserInfo', _this.username, data.token);

                            var is_Open = false;
                            _this.$emit('closeModal',is_Open);

                        } else {
                            console.log('회원정보가 없습니다.');
                            _this.result_fail = true;
                        }
                    })
                    .catch(function(error) {
                        console.error(error.message);
                        _this.result_fail = true;
                        _this.alert_message = '아이디 또는 비밀번호를 다시 확인하세요.';

                    });
            },
            facebookLogin(){
                console.log('facebookLogin');
                var _this = this;
                FB.login(function(response){

                    let data = response.authResponse;

                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            // load user information from FB
                            FB.api('/me?fields=id,name,picture.width(100).height(100).as(picture_small)', function(response) {
                                console.log('FB.api(응답:',response);
                                
                                if ( response !== null ){

                                                            let profile  = response.picture_small.data.url;
                                    let userName = response.name;
                                    
                                    // 세션에 저장
                                    // sessionStorage.setItem("id",    userName);
                                    // sessionStorage.setItem("profile", profile);

                                    _this.$store.commit('setUserName',  userName);
                                    _this.$store.commit('setUserProfile',  profile);
                                    
                                    var userToken = new FormData();
                                    // userToken.append('access_token',data.accessToken);
                                    // 임의의 토큰값을 보내기 - test
                                    userToken.append('access_token','dfsfdsffsdfsdfsdfsd');

                                    // save token in DB
                                    axios.post('/user/fblogin/',userToken)
                                         .then(function(responseData) {
                                            console.log('FBlogin-우리서버(응답:',responseData.statusText);
                                            // if( responseData.statusText === "OK" ){
                                                // 아이디와 비번이 맞으면 첫번째 페이지로 이동하기
                                                console.log('환영합니다.');
                                                console.log('router',_this.$router);

                                                 _this.$router.go({ path: '/'});


                                            // }else{ console.error('페북유저토큰보내기:',response); }
                                            
                                    }).catch(function(error) {
                                            console.log('페북유저토큰보내기실패');
                                            _this.$router.push({ name: 'home'});
                                            // console.error(error.message);
                                    });

                                } else {
                                    console.log('로그인이 되어 있고 앱등록도 되어있음 앞으로 페이지 이동');
                                //    _this.isFacebookLogin();
                                    this.$router.push('/');
                                }
                            });

                        } else if( response.status === 'not_authorized' ){
                            console.log('not_authorized');
                        
                        }
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

