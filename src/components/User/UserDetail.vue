<template>
      <div class="modal" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop>
                <a role="button" href class="modal-prev-btn" aria-label="content" @click.prevent="closeModal">
                    <span class="pe-7s-close-circle" aria-hidden="true"></span>
                </a>
                <div class="modal-header">
                    <h2>나의 정보</h2>
                    <!--<p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>-->
                </div>
                <div class="modal-body">
                        <p>
                            <label for="email">email</label>
                            <input  type="text" name="email" placeholder="email" v-model:email = "email">
                        </p>
                </div>
                <div class="modal-footer">
                    <a href @click.stop.prevent="findPwd">비밀번호 수정</a>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                email : ''
                
            }
        },
    
        methods: {
           
            closeModal(event){
                event.stopPropagation();
                this.$store.commit('setUserDetailStatus',false);
            },
            
            findPwd(){
                //attatch email infomation
                this.$emit('findPwd');
            }
        }
    }
</script>
