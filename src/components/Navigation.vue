<template>
  <header>
    <h2 class="nav-heading">
      <router-link to="/" tag="a">
        <img src="../assets/PM0603-3.png" alt="logo">
      </router-link>
    </h2>
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
        <button type="button" @click.prevent="gotoSearch">
          <svg width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" fill-rule="evenodd">
              <ellipse cx="9.294" cy="9.262" rx="8.294" ry="8.262"></ellipse>
              <path d="M15.5 15.5l7 7"></path>
            </g>
          </svg>
        </button>
        <button type="button" class="signin" v-if="!is_signin" @click="openAlert">sign up / login
          <app-show v-if="open_it" @shutModal="closeModal" @isFacebookLogin="isFacebookLogin"></app-show>
        </button>
        <button type="button" v-else>
          <p>{{on_user}}님 환영합니다.</p>
          <img :src="user_profile" alt="id">
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
    import ShowModal from './Modal/ShowModal.vue'
    export default {
        data(){
            return{
              open_it : false,
              is_signin : false,
              on_user : '',
              user_profile: ''
            }
        },
        components:{
          appShow : ShowModal
        },
        methods: {
          gotoHome() {
            this.$router.push({path: '/'});
          },
          gotoSearch() {
            this.$router.push({path: '/search'});
          },
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
          isFacebookLogin(name, profile){
            console.log('isFacebookLogin-네비');
            if(name){
              this.on_user = name;
              this.user_profile = profile;
              this.is_signin = true;
            } else {
              console.log('페북 로그인 실패');
            }
          }

        }
    }

</script>
