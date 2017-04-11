<template>
  <div class="search">
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass1">All</a>
      <ul ref="toggle1" class="none">
        <li><a href="#">SEOUL</a></li>
        <li><a href="#">GYUNGGGI</a></li>
        <li><a href="#">BUSAN</a></li>
      </ul>
    </div>
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass2">All</a>
      <ul ref="toggle2" class="none">
        <li><a href="#">SEOUL</a></li>
        <li><a href="#">GYUNGGGI</a></li>
        <li><a href="#">BUSAN</a></li>
      </ul>
    </div>
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass3">All</a>
      <ul ref="toggle3" class="none">
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
      menuToggleClass1(){
        this.$refs.toggle1.classList.toggle('dropdown');
      },
      menuToggleClass2(){
        this.$refs.toggle2.classList.toggle('dropdown');
      },
      menuToggleClass3(){
        this.$refs.toggle3.classList.toggle('dropdown');
      },
    }
  }
</script>
