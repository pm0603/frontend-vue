
<template>
    <div class="modal" @click="closeModal">
            <div class="modal-content-md" @click.stop="tempStopPropagation">
                <a role="button" href class="modal-prev-btn" aria-label="content" @click.prevent="closeModal"><i class="ss-delete" aria-hidden="true"></i></a>
                <div class="modal-header">
                    <h2>로그인</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p class="result-fail" v-else>{{alert_message}}</p>
                </div>
                <div class="modal-body">
                        <p>
                            <label for="email">email</label>
                            <input  type="text" name="email" placeholder="email" v-model:email = "email">
                        </p>
                        <p>
                            <label for="password">password</label>
                            <input type="password" name="password" placeholder="password" v-model:password = "password">
                        </p>

                    <p>Forgotten your password? <a href>RESET IT NOW</a></p>
                    <p><button type="button" @click.prevent="facebookLogin">facebook</button></p>
                </div>
                <div class="modal-footer">
                    <a href @click.stop.prevent="login">login</a>
                </div>
            </div>
    </div>
</template>
<script>
    import facebookLogin from './facebookLogin.js';
    export default{
        data(){
            return{
                email: '',
                password: '',
                result_fail: false,
                user_name: '',
                main_message: 'Good to have you back!',
                alert_message: 'Please insert different id'
            }
        },
        methods: {
            tempStopPropagation() {
                console.log('click');
                // 또는 event를 받아서 네이티브로는 이렇게 event.stopPropagation();를 써서
            },
            closeModal: function(event){
                event.stopPropagation();
                var is_Open = false;
                // event.stopImmediatePropagation();
                this.$emit('closeModal',is_Open);
            },
            login: function(val){
                var _this = this;

                axios.post('/user/login/',{
                        params: {
                            email: this.email,
                            password: this.password
                        }
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
                console.log('facebook login?');
                FB.login();
            }
        }
    }
</script>

<style lang="sass">
    .result-fail
        color: #f01160
    .ss-delete
        font-size: 22px
        color: #2e2f33
</style>
