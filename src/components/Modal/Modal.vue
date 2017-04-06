
<template>
    <div class="modal" >
            <div class="modal-content-md">
                <a class="modal-prev-btn" @click.stop="closeModal" > prev </a>
                <div class="modal-header">
                    <h2>로그인</h2>
                    <p>Good to have you back!</p>
                        <p v-if="result_fail">Please insert different id</p>
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
                    <!--<a >facebook</a>-->
                </div>
                <div class="modal-footer">
                    <a @click="login">login</a>
                </div>
            </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                'email': '',
                'password': '',
                'result_fail': false,
                'user_name': ''
            }
        },
        methods: {
            closeModal: function(event){
                console.log('modal의 closeModal');
                console.log('event:',event);

                event.stopPropagation();
                var is_Open = false;
                // event.stopImmediatePropagation();
                
                this.$emit('closeModal',is_Open);
            },
            login: function(val){
                console.log('login!');
                console.log('email:'+this.email);
                console.log('password:'+this.password);
                
                var _this = this;
                
                axios.defaults.baseURL                         = 'http://www.pm0603.com/user/login/';
                axios.post('http://www.pm0603.com/user/login/',{
                        params: {
                            email: this.email,
                            password: this.password
                        }
                    }).then(function(response) {
                        'use strict';
                        console.log("response:",response.data[0]);
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
                            // 다르다고 알람 띄워주기
                            // failStyle();
                            console.log('회원정보가 없습니다.');
                            console.log('result_fail:',result_fail);
                            this.result_fail = true;
                        }
                    })
                    .catch(function(error) {
                        console.log('fail!');
                        console.error(error.message);
                    });
            }
        }
        
    }
</script>



<style lang="sass">
    .result-fail
        display : none
</style>