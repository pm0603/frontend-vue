<template>
  <div id="app">
    <!--이곳에 라우터가 들어옴-->
    <app-nav></app-nav>
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
</style>
