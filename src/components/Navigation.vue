<template>
    <!--<nav class="gnb">
        <ul>
            <li><router-link to="/" active-class="current-page" exact>Home</router-link></li>
            <li><router-link to="/user" active-class="current-page">User</router-link></li>-->
            <!--<router-link to="/" tag="li" active-class="current-page" exact><a href>Home</a></router-link>-->
           
            <!--<router-link to="/user" tag="li" active-class="current-page" ><a href>User</a></router-link>-->
            <!--<router-link to="/user/1" tag="li" active-class="current-page" ><a href>User 1</a></router-link>
            <router-link to="/user/2" tag="li" active-class="current-page" ><a href>User 2</a></router-link>
             <router-link to="/user" tag="li" active-class="current-page" ><a href>Login </a></router-link>-->
             <!--모달창
            <a href @click="is_open = false" class="open-modal">
                <show-modal v-if="openModal" @close="closeModal">modal</show-modal>     
            </a> 
             
        </ul>
    </nav>-->
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
        <button type="button" class="signin" @click="openAlert">sign up / login
                <app-show v-if="open_it" @shutModal="closeModal"></app-show>
        </button>
      </div>
    </nav>
</template>

<script>
    import ShowModal from './Modal/ShowModal.vue'
    export default {
        data(){
            return{
              open_it : false
            }
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
          }
        }
    }
</script>

<style lang="sass">
     .open-modal
        width : 200px
        height : 50px
</style>