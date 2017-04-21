<template>
      <div class="modal detail" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop>
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
                            <input type="password" name="beforePassword" placeholder="비밀번호를 입력하세요." v-model="beforePwd" readonly>
                        </p>
                        <p>
                            <label for="email">new password</label>
                            <input  type="password" name="password" placeholder="새로운 비밀번호를 입력하세요." v-model= "afterPwd" readonly>
                        </p>
                        <p>
                            <label for="email">new password</label>
                            <input  type="password" name="password" placeholder="새로운 비밀번호를 입력하세요." v-model= "afterPwd2" readonly>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click.stop.prevent="findPwd"
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
                afterPwd2   : '',

                result_fail     : false,
                main_message    : '',
                alert_message   : '',

            }
        },
        methods: {
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setUserDetailStatus',false);
                this.$store.commit('setModalStatus',false);
            },
            //ttp://api.pm0603.com/user/password/change
            findPwd(){
                //attatch email infomation
                // this.showUserDetail = false;
                // 통신하기
                var _this = this;
                let passwordData = new FormData(this.$refs.loginForm);

                axios.post('/user/password/change', passwordData)
                     .then(function(response){


                    

                });
            }
            
        }
    }
</script>