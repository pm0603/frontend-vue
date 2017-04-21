<template>
  <header>
    <h2 class="nav-heading">
      <router-link to="/" tag="a">
        <img src="../assets/PM0603-3.png" alt="logo">
      </router-link>
    </h2>
    <nav class="nav">
      <div ref="navLeft" class="nav-left">
        <ul class="category">
          <router-link to="/genre?realm_name=연극" tag="li" active-class="current-page" ><a href>연극·뮤지컬</a></router-link>
          <router-link to="/genre?realm_name=미술" tag="li" active-class="current-page" ><a href>전시</a></router-link>
          <router-link to="/genre?realm_name=음악" tag="li" active-class="current-page" ><a href>음악</a></router-link>
          <router-link to="/genre?realm_name=무용" tag="li" active-class="current-page" ><a href>무용</a></router-link>
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
        <!--로그인이 안된 상태-->
        <button type="button" class="signin" v-if="!is_signin" @click.prevent="openAlert"> sign up / login
          <show-modal v-show="openIt"></show-modal>
        </button>
        <!--로그인이 된 상태-->
        <button type="button" v-else v-show="!openIt" @click.prevent="openUserService" class="signin online">
            <img :src="user_profile" alt="profile" class="facebook-profile">
            <i class="pe-7s-angle-down" aria-hidden="true"></i>
            <div v-if="showService" class="mymenu">
              <ul class="mymenu-list">
                <li>
                  <button type="button" @click.stop="openUserDetail">나의 정보
                    <user-detail v-if="isUserDetail"></user-detail>
                  </button>
                </li>
                <li>
                  <router-link to="/bookmark" tag="button" active-class="current-page">나의 북마크</router-link>
                </li>
                <li>
                  <button type="button" @click="logout">로그아웃</button>
                </li>
              </ul>
            </div>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
    import ShowModal  from './Modal/ShowModal.vue';
    import UserDetail from './User/UserDetail.vue';

    export default {
        data(){
            return{
              on_user : ''
            }
        },
        components:{
          showModal  : ShowModal,
          userDetail : UserDetail
        },
        computed: {
            user_profile(){

              let profile;
              if( localStorage.profile ){
                profile = localStorage.profile;
              } else {
                profile = 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-man-circle-invert-512.png';
              }
              return profile;
            },
            // 모달창의 on/off
            openIt(){
              return this.$store.getters.getModalStatus;
            },
            // 로그인 후 토글되는 메뉴
            showService(){
              return this.$store.getters.getUserShowMenu;
            },
            // 나의 정보
            isUserDetail(){
              return this.$store.getters.getUserDetailStatus;
            },
            // 로그인 상태 체크 - 버튼 변화
            is_signin(){
              return this.$store.getters.getUserLoginStatus;
            }
        },
        beforeRouteEnter(to, from, next){
          // 회원이면
          if(window.localStorage.token){
            this.$store.commit('setUserLoginStatus', true);
            this.$store.commit('setModalStatus', true);
            next();

          } else {
          // 회원이 아니면
            this.$route.push('/');
          }
        },
        beforeCreate(){
          if(window.localStorage.token){
            this.$store.commit('setUserLoginStatus', true);
            // this.$store.commit('setModalStatus', true);
            this.user_profile = this.$store.getters.getUserProfile;
            this.on_user      = this.$store.getters.getUserName;
            this.$store.commit('setMainTitle', this.on_user );
          }
        },
        mounted () {
          if( localStorage.length ){
            this.$store.commit('setUserLoginStatus', true);
            this.user_profile = this.$store.getters.getUserProfile;
            this.on_user      = this.$store.getters.getUserName;
          }else{
            this.$store.commit('setUserLoginStatus', false);
          }
        },
        updated () {
          // this.$store.commit('setUserDetailStatus', true );
          let update_detail = this.isUserDetail;
          if( update_detail ){this.$store.commit('setUserDetailStatus', true );}
        },

        methods: {
          gotoHome() {
            this.$router.push({path: '/'});
          },
          gotoSearch() {
            this.$router.push({path: '/search?q='});
          },
          navLeftToggleClass(){
            this.$refs.navLeft.classList.toggle('mobile-menu');
          },
          noneToggleClass(){
            this.$refs.none.classList.toggle('dropdown');
          },
          openUserDetail(){
            this.$store.commit('setUserDetailStatus', true );
          },
          openAlert() {
            this.$store.commit('setModalStatus', true );
          },
          closeModal(){
            this.$store.commit('setModalStatus', false );
          },
          openUserService(){
            let is_spread = this.showService ? false : true ;
            this.$store.commit('setUserShowMenu', is_spread );
          },
          logout(){
            var _this = this;
            let is_profile = this.$store.getters.getUserProfile;

            if(is_profile){
            // 페이스북 로그인이면
                FB.getLoginStatus(function(response){
                  if(response.status=='connected'){
                    FB.logout();

                    localStorage.clear();

                    _this.$store.commit('setUserLoginStatus', false);
                    _this.$store.commit('setModalStatus', false);
                    _this.$router.push('/');
                  }
                });
              } else {
                // 일반 로그인이면
                axios.post('/user/logout/')
                    .then(function(response) {
                        // 로그아웃 성공
                        localStorage.clear();
                        _this.$store.commit('setUserLoginStatus', false);
                        _this.$store.commit('setModalStatus', false);
                        _this.$router.push('/');
                    })
                    .catch(function(error){
                          // 네트워크 오류

                    });
              }
              console.log('모달창:', this.$store.getters.getModalStatus);
              this.$store.commit('setMainTitle','default');
              this.$store.commit('setModalStatus', false);
          }
        }
    }
</script>
