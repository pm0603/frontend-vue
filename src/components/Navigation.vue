<template>
    <nav class="nav">
      <div ref="navLeft" class="nav-left">
        <div class="nav-location">
          <a href="#" class="nav-location-all"
          @click.prevent="noneToggleClass">All</a>
          <ul ref="none" class="none">
            <li><a href="#">SEOUL</a></li>
            <li><a href="#">GYUNGGGI</a></li>
            <li><a href="#">BUSAN</a></li>
          </ul>
        </div>
        <ul class="category">
          <router-link to="/detail" tag="li" active-class="current-page" ><a href>상세페이지</a></router-link>
          <li><a href="#">category</a></li>
          <li><a href="#">category</a></li>
          <li><a href="#">category</a></li>
          <li><a href="#">category</a></li>
        </ul>
      </div>
      <div class="nav-right">
        <a class="nav-menu" @click.prevent="navLeftToggleClass">&#9776;</a>
        <button type="button">
          <svg width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" fill-rule="evenodd">
              <ellipse cx="9.294" cy="9.262" rx="8.294" ry="8.262"></ellipse>
              <path d="M15.5 15.5l7 7"></path>
            </g>
          </svg>
        </button>
               <button type="button" class="signin" v-if="!is_signin" @click="openAlert"> sign up / login
                <app-show v-if="open_it" 
                          @shutModal="closeModal" 
                          @isFacebookLogin="isFacebookLogin"
                          @isLogin="isLogin"></app-show>
               </button>
               <button type="button" v-else @click="openUserService">
          <img :src="user_profile" alt="id" class="facebook-profile">
          <p>{{on_user}}님</p>
          <div v-if="show_service">
            <ul>
              <li><a href >개인정보</a></li>
              <li><a href @click="logout">로그아웃</a></li>
            </ul>
          </div>

        </button>
      </div>
    </nav>
</template>

<script>
    import ShowModal from './Modal/ShowModal.vue';
    export default {
        data(){
            return{
              open_it     : false,
              is_signin   : false,
              show_service: false,
              
              on_user     : '',
              user_profile: '',

            }
        },
        beforeCreate(){
          console.log('생성전!');
          this.open_it      = false;
          console.log('bCreate:', this.$store);
          
        },
        created () {
          console.log('생성!');
        },
        beforeMount () {
          console.log('마운트되기전!');
        },
        mounted () {
          console.log('마운트됨!');

          if( sessionStorage.length ){
            this.is_signin    = true;
            this.user_profile = this.$store.getters.getUserProfile;
            this.on_user      = this.$store.getters.getUserName;
          }else{
            this.is_signin    = false;
          }
            
          
        },
        updated () {
          console.log('업데이트!');
        },
        activated () {
          console.log('액티브됨!');
        },

        components:{
          appShow : ShowModal
        },
        methods: {
          openAlert() {
            this.open_it = true;            
          },
          closeModal(isOpen){
            console.log('nav의closeModal:',isOpen);
            this.open_it = isOpen;
          },
          navLeftToggleClass(){
            this.$refs.navLeft.classList.toggle('mobile-menu');
          },
          noneToggleClass(){
            this.$refs.none.classList.toggle('dropdown');
          },
          isFacebookLogin(){
            console.log('isFacebookLogin-네비');
                       // if(name){
              // this.on_user = name;
              this.on_user      = this.$store.getters.getUserName;
              this.user_profile = this.$store.getters.getUserProfile;
              // this.on_user      = this.$store.getters.getUserInfo.name;
              // this.user_profile = profile;
              this.is_signin    = true;
            // } else {
            //   console.log('페북 로그인 실패');
            // }
          },
          isLogin(){
            this.on_user      = "welcome!";
            this.user_profile = "";
          },
          openUserService(){
            this.show_service = this.show_service ? false : true ;
          },
          logout(){
            
            let is_profile = this.$store.getters.getUserProfile;
            if(is_profile){
            // 페이스북 로그인이면
              FB.logout(function(){

              });
            }
              // 일반 로그인이면
              sessionStorage.clear();
              this.is_signin = false;
              this.$router.path({name: 'home'});
            

          
        }
    }
  }
    
</script>

<style lang="sass">
    .open-modal
      width : 200px
      height : 50px
    .facebook-profile
      border-radius : 50%
      width : 38%
      height : 38%

</style>