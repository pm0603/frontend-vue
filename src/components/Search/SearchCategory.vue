<template>
  <div class="search">
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass">All</a>
      <ul ref="none" class="none">
        <li><a href="#">SEOUL</a></li>
        <li><a href="#">GYUNGGGI</a></li>
        <li><a href="#">BUSAN</a></li>
      </ul>
    </div>
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass">All</a>
      <ul ref="none" class="none">
        <li><a href="#">SEOUL</a></li>
        <li><a href="#">GYUNGGGI</a></li>
        <li><a href="#">BUSAN</a></li>
      </ul>
    </div>
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass">All</a>
      <ul ref="none" class="none">
        <li><a href="#">SEOUL</a></li>
        <li><a href="#">GYUNGGGI</a></li>
        <li><a href="#">BUSAN</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      menuToggleClass(){
        this.$refs.none.classList.toggle('dropdown');
      }
    }
  }
</script>
