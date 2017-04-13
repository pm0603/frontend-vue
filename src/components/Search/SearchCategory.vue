<template>
  <div class="search">
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass1">지역</a>
      <ul ref="toggle1" class="none">
        <li><a href="#">서울</a></li>
        <li><a href="#">경기</a></li>
        <li><a href="#">부산</a></li>
      </ul>
    </div>
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass2">공연일자</a>
      <ul ref="toggle2" class="none">
        <li><a href="#">공연 시작일</a></li>
        <li><a href="#">공연 마감일</a></li>
      </ul>
    </div>
    <div class="search-category">
      <a href="#" class="category-all" @click.prevent="menuToggleClass3">카테고리</a>
      <ul ref="toggle3" class="none">
        <li><a href="#">연극</a></li>
        <li><a href="#">뮤지컬</a></li>
        <li><a href="#">콘서트</a></li>
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
        if (this.$el.children[0].children[1].classList.length === 1){
          for(var i=0; i<this.$el.children.length; i++) {
            // this.$el.children[i].classList.toggle('category-active');
            this.$el.children[i].children[1].classList.remove('dropdown');
          }
          this.$refs.toggle1.classList.toggle('dropdown');
        }
        else {this.$refs.toggle1.classList.toggle('dropdown');}
      },
      menuToggleClass2(){
        if (this.$el.children[1].children[1].classList.length === 1){
          for(var i=0; i<this.$el.children.length; i++) {
            // this.$el.children[i].classList.toggle('category-active');
            this.$el.children[i].children[1].classList.remove('dropdown');
          }
          this.$refs.toggle2.classList.toggle('dropdown');
        }
        else {this.$refs.toggle2.classList.toggle('dropdown');}
      },
      menuToggleClass3(){
        if (this.$el.children[2].children[1].classList.length === 1){
          for(var i=0; i<this.$el.children.length; i++) {
            // this.$el.children[i].classList.toggle('category-active');
            this.$el.children[i].children[1].classList.remove('dropdown');
          }
          this.$refs.toggle3.classList.toggle('dropdown');
        }
        else {this.$refs.toggle3.classList.toggle('dropdown');}
      },
    }
  }
</script>
