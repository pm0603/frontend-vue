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
                <form enctype="multipart/form-data" method="POST" @submit.prevent="signUp" ref="form">
                <div class="modal-body">
                        <p>
                            <label for="name">이름</label>
                            <input  type="text" name="name" placeholder="name" v-model:name = "name">
                        </p>
                        <p>
                            <label for="email">이메일</label>
                            <input  type="text" name="email" placeholder="email" required v-model:email = "email">
                        </p>
                        <p>
                            <label for="password">비밀번호</label>
                            <input type="password" name="password" placeholder="password" required v-model:password = "password">
                        </p>
                        <p>
                            <label for="password">password</label>
                            <input type="password" name="password" placeholder="password" v-model:password = "password">
                        </p>
                </div>
                <div class="modal-footer">
                    <button type="submit" @click.stop.prevent="signUp">가입하기</button>

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
                name: '',
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
                var _this = this;
                console.log('form:',this.$refs.form);
                let signData = new FormData(this.$refs.form);
               
                axios.post('/user/signup/', signData)
                     .then(function(response){
                        // 앞으로 가기
                        // _this.$emit('isLogin');
                        _this.$router.push('/');
                        console.log('회원가입성공:',response);
                        
                    })
                    .catch(function(error){
                        console.log(error);
                        _this.alert_message = '이메일 혹은 비밀번호가 올바르지 않습니다.';
                        _this.email = '';
                        _this.password = '';
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

