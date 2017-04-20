<template>
  <h2 class="genre-heading">
    {{genreTerm}} 공연 리스트
  </h2>
</template>

<script>
  export default{
    data(){
      return{
        genre: this.$route.query.k
      }
    },
    computed: {
      genreTerm: function() {
        return this.genre = this.$route.query.k;
      }
    },
  }
</script>
