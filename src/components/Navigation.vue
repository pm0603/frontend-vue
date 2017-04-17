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
          @click.prevent="noneToggleClass">전국</a>
          <ul ref="none" class="none">
            <li><a href="#">서울</a></li>
            <li><a href="#">경기</a></li>
            <li><a href="#">대전</a></li>
            <li><a href="#">부산</a></li>
          </ul>
        </div>
        <ul class="category">
          <router-link to="/detail"      tag="li" active-class="current-page" ><a href>상세페이지</a></router-link>
          <router-link to="/genre?k=연극" tag="li" active-class="current-page" ><a href>연극</a></router-link>
          <router-link to="/genre?k=미술" tag="li" active-class="current-page" ><a href>미술</a></router-link>
          <router-link to="/genre?k=음악" tag="li" active-class="current-page" ><a href>음악</a></router-link>
          <router-link to="/genre?k=콘서트" tag="li" active-class="current-page" ><a href>콘서트</a></router-link>
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
              <ul>
                <li>
                  <button type="button" @click="openUserDetail">나의 정보
                    <user-detail v-show="isUserDetail"></user-detail>
                  </button>
                </li>
                <li>
                  <router-link to="/bookmark" tag="button" active-class="current-page" ><button type="button">나의 북마크</button></router-link>
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
              on_user : '', // need this?
            }
        },
        components:{
          showModal  : ShowModal,
          userDetail : UserDetail
        },
        computed: {
            user_profile(){
              return this.$store.getters.getUserProfile;
            },
            // 모달창의 on/off
            openIt(){
              return this.$store.getters.getModalStatus;
            },
            // 로그인 후 토글되는 메뉴
            showService(){
              return this.$store.getters.getUserShowMenu;
            },
            isUserDetail(){
              return this.$store.getters.getUserDetailStatus;
            },
            // 로그인 상태 체크 - 버튼 변화
            is_signin(){
              return this.$store.getters.getUserLoginStatus;
            }
        },
        beforeRouteEnter(to, from, next){
          console.log('라우터,토큰값:',window.localStorage.token);
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
          console.log('생성전!');
          this.$store.commit('setModalStatus', false );
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
        activated () {
          console.log('액티브됨!');
        },

        methods: {
          gotoHome() {
            this.$router.push({path: '/'});
          },
          gotoSearch() {
            this.$router.push({path: '/search'});
          },
          navLeftToggleClass(){
            this.$refs.navLeft.classList.toggle('mobile-menu');
          },
          noneToggleClass(){
            this.$refs.none.classList.toggle('dropdown');
          },
          openUserDetail(){
            console.log('open@');
            this.$store.commit('setUserDetailStatus', true );
          },
          openAlert() {
            this.$store.commit('setModalStatus', true );
          },
          closeModal(){
            this.$store.commit('setModalStatus', false );
          },
          openUserService(){
            console.log('openUserService'); 
            let is_spread = this.showService ? false : true ;
            this.$store.commit('setUserShowMenu', is_spread );
          },
          logout(){
            var _this = this;
            let is_profile = this.$store.getters.getUserProfile;
            console.log('로그아웃: '+is_profile);
            if(is_profile){
            // 페이스북 로그인이면
              console.log('페북로그아웃');
                FB.getLoginStatus(function(response){
                  if(response.status=='connected'){
                    FB.logout();

                    localStorage.clear();

                    _this.$store.commit('setUserLoginStatus', false);
                    _this.$store.commit('setModalStatus', false);

                  }
                });
              } else {
                // 일반 로그인이면
                console.log('일반로그아웃');
                axios.post('/user/logout/')
                    .then(function(response) {
                          // 로그아웃 성공
                        localStorage.clear();
                        _this.$store.commit('setUserLoginStatus', false);
                    })
                    .catch(function(error){
                          // 네트워크 오류
                    });
              }
          }
        }
    }
</script>
