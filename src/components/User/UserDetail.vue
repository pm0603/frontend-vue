<template>
      <div class="modal detail" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop>
                <a role="button" href class="modal-close-btn" aria-label="content" @click.prevent="closeModal">
                    <span class="pe-7s-close" aria-hidden="true"></span>
                </a>
                <div class="modal-header">
                    <h2>나의 정보</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>
                </div>
                <div class="modal-body">
                    <figure>
                        <img></img>
                    </figure>
                    <p>
                        <label for="name">name</label>
                        <input type="text" name="username" placeholder="이름" v-model="username" readonly>
                    </p>
                    <p>
                        <label for="email">email</label>
                        <input  type="text" name="email" placeholder="이메일" v-model= "email" readonly>
                    </p>
                    <!--<p>
                        <button type="button" class="btn-findpwd" @click.stop.prevent="findPwd">비밀번호 수정하기</button>
                    </p>-->
                </div>
                <div class="modal-footer">
                    <button type="button" @click.stop.prevent="findPwd"
                                          @keyup.enter="findPwd">비밀번호 수정하기</button>
                </div>
            </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                username: 'username',
                email : 'email@com',

                main_message: '',
                alert_message: '',
                result_fail: true
            }
        },
        created () {
            if( localStorage ){
                this.username = localStorage.name;
            } else {
                let userInfo  = this.$store.getters.getUserInfo;
                this.username = userInfo.name;
                this.email    = userInfo.email;
            }
        },
        methods: {
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setUserDetailStatus',false);
                this.$store.commit('setModalStatus',false);
            },
            findPwd(){
                //attatch email infomation
                this.$emit('findPwd');
            }
        }
    }
</script>
