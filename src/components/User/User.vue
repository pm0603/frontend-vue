<template>
    <header>
        <h2>User</h2>
        <p> Parameter Id: {{ id }} </p>
        <app-user-link>go to home</app-user-link>
        <ul>
            <li>user name</li>
            <li>user email</li>
            <li>user password</li>
        </ul>
    </header>
</template>

<script>
    import UserLink from './UserLink.vue'
    export default{
        components:{
            appUserLink: UserLink
        },
        watch:{
            '$route' (to, from){
                this.id = to.params.id; 
            }
        },
        data(){
            return{
                id: this.$route.params.id
            }
        }
    }
</script>

<style lang="sass">
    
</style>