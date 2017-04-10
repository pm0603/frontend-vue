<template>
  <div id="app">
    <!--이곳에 라우터가 들어옴-->
    <header>
        <h2 class="nav-heading">
          <router-link to="/" active-class="current-page" ><a href>
            <img src="./assets/PM0603-3.png" alt="logo">
          </a></router-link>
        </h2>
        <app-nav></app-nav>
    </header>
    <router-view></router-view>
   </div>
</template>

<script>
// 네비게이션 페이지 추가 설정
import Navigation from './components/Navigation.vue';
export default {
  name: 'app',
  components: {
    appNav: Navigation
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  @import './components/sass/pm0603.sass'

  .nav-heading img
    width: 90%
</style>
