<template>
    <div class="modal" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop="tempStopPropagation">
                <a role="button" href class="modal-prev-btn" aria-label="prev" @click.prevent="showMainModal">
                    <i class="ss-navigateleft" aria-hidden="true"></i>
                </a>
                <div class="modal-header">
                    <h2>회원가입</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>
                </div>
                <form enctype="multipart/form-data" method="POST @submit.prevent">
                <div class="modal-body">
                        <p>
                            <label for="email">email</label>
                            <input  type="text" name="email" placeholder="email" v-model:email = "email">
                        </p>
                        <p>
                            <label for="password">password</label>
                            <input type="password" name="password" placeholder="password" v-model:password = "password">
                        </p>
                        <p>
                            <label for="password">password</label>
                            <input type="password" name="password" placeholder="password" v-model:password = "password">
                        </p>
                </div>
                <div class="modal-footer">
                    <a href @click.stop.prevent="signUp">가입하기</a>
                </div>
                </form>
            </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                result_fail: true,
                main_message: '',
                alert_message: '',
                email: '',
                password: ''
            }
        },
        methods: {
            tempStopPropagation() {
                console.log('click');
                // 또는 event를 받아서 네이티브로는 이렇게 event.stopPropagation();를 써서
            },
            closeModal(event){
                event.stopPropagation();
                // event.stopImmediatePropagation();
                var is_Open = false;
                this.$emit('closeModal',is_Open);
            },
            showMainModal(){
                this.$emit('showMainModal');
            },
            signUp(){
                var signId = this.email;
                var signPwd = this.password;
                console.log('signId:',signId);
                console.log('signPwd:',signPwd);

                let signData = new FormData();
                signData.append('email', signId+'');
                signData.append('password', signPwd+'');

                console.log('signData:',signData);

                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                
                // var request = new XMLHttpRequest();
                // request.open('POST', "http://www.pm0603.com/user/signup");
                // request.send(signData);
                
                
                // /user/signup
                // axios.post('https://pm-824c9.firebaseio.com/member.json',signData, config)

                
                axios.post('/user/signup/',{
                        email: signId,
                        password: signPwd
                    })
                    .then(function(response){
                        console.log('회원가입성공:',response);
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="sass" scoped>
    .modal-body
        padding-top: 6rem

    .ss-navigateleft
        font-size: 26px
        color: #2e2f33
</style>

