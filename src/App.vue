<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
   </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    appNav: Navigation
  }
}
</script>

<style lang="sass">
  @import './components/sass/pm0603.sass'
</style>
