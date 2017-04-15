
<template>
    <div class="modal">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content-md" @click.stop>
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
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" @click.stop.prevent="doLogin"
                                          @keyup.enter="doLogin">login</button>
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
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setModalStatus',false);
            },
            showSignUpModal(){
                this.$store.commit('setModalStage', 2);
            },
            // 로그인하기
            doLogin(){
                var _this = this;
                let loginData = new FormData(this.$refs.loginForm);

                axios.post('/user/login/', loginData)
                     .then(function(response) {
                        let data = response.data;
                        console.log('응답:',response);
                        if( response.status === 200 ){
                            // set user id
                            _this.$store.commit('setUserToken', response.data.token);

                            window.localStorage.setItem( 'token', response.data.token );

                            _this.$store.commit('setUserInfo', { 'name': _this.username, 'email': _this.email});
                            _this.$store.commit('setModalStatus',false);

                            _this.$router.push('/');
                            
                        }else if( response.status === 400 ){
                            _this.result_fail = true;
                            _this.alert_message = '이메일 또는 비밀번호가 올바르지 않습니다.';
                        } else {
                            _this.result_fail = true;
                            _this.alert_message  = '네트워크 에러';
                        }

                });

// "3294b5d7b66d9b6ce3c6f2ff53cc9b74c39c864e"
            },
            facebookLogin(){
                console.log('facebookLogin');
                var _this = this;
                FB.login(function(response){

                    let data = response.authResponse;

                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
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
                                    userToken.append('access_token',data.accessToken);
                                   

                                    // save token in DB
                                    axios.post('/user/fblogin/',userToken)
                                         .then(function(responseData) {
                                            console.log('FBlogin-우리서버(응답:',responseData.statusText);
                                            // if( responseData.statusText === "OK" ){
                                                // 아이디와 비번이 맞으면 첫번째 페이지로 이동하기
                                                console.log('환영합니다.');
                                                console.log('router',_this.$router);

                                                 _this.$router.go({ path: '/'});
                                            
                                    }).catch(function(error) {
                                            _this.alert_message = "NetWork Error";
                                            // _this.$router.push({ name: 'home'});
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
            }
        }
    }
</script>

<style lang="sass">
    button[type="submit"]
        font-size: 1.6rem
    .result-fail
        height: 2rem

</style>