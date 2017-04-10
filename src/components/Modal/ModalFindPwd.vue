<template>
      <div class="modal" @click="closeModal">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content-md" @click.stop="tempStopPropagation">
                <a role="button" href class="modal-prev-btn" aria-label="prev" @click.prevent="showMainModal">
                    <i class="ss-navigateleft" aria-hidden="true"></i>
                </a>
                <div class="modal-header">
                    <h2>비밀번호 찾기</h2>
                    <p v-if="!result_fail">{{main_message}}</p>
                    <p v-else class="result-fail">{{alert_message}}</p>
                </div>
                <div class="modal-body">

                        <p>
                            <label for="email">email</label>
                            <input  type="text" name="email" placeholder="email" v-model:email = "email">
                        </p>
                       
                </div>
                <div class="modal-footer">
                    <a href @click.stop.prevent="findPwd">찾기</a>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                email: '',
                main_message: '',
                alert_message: '',
                result_fail: false,
                
            }
        },
        methods: {
            tempStopPropagation(){

            },
            closeModal(event){
                event.stopPropagation();
                var is_Open = false;
                this.$emit('closeModal',is_Open);
            },
            showMainModal(){
                this.$emit('showMainModal');
            },
            findPwd(){
                //attatch email infomation
                this.$emit('findPwd');
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