<template>
    <button type="button" @click="gotoHomeComponent">
        <slot></slot>
    </button>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods: {
            gotoHomeComponent(){
                // this.$router.push('/');
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style lang="sass">
    
</style>