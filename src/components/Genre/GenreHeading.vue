<template>
  <h2 class="genre-heading" :style="{ 'background-image': 'url(' + url+ ')' }">
    {{genreTerm}} 리스트
  </h2>
</template>

<script>
  export default{
    data(){
      return{
        genre: this.$route.query.realm_name,
        url: null
      }
    },
    computed: {
      genreTerm: function() {
        if(this.$route.query.realm_name === "연극"){
          return this.genre = "연극·뮤지컬"
        }
        else if(this.$route.query.realm_name === "미술"){
          return this.genre = "전시"
        }
        else {
          return this.genre = this.$route.query.realm_name;
        }
      }
    },
    created: function() {
      this.backgroundImage();
    },
    beforeUpdate: function() {
      this.backgroundImage();
    },
    methods: {
      backgroundImage: function() {
        let genreurl = this.$route.query.realm_name;
        switch(genreurl) {
          case "연극":
            this.url = "http://cfile8.uf.tistory.com/image/225CB1415209FD2B03DF76"
            break;
          case "미술":
            this.url = "http://www.daelimmuseum.org/att/[357097_362476]20170210180104.jpg"
            break;
          case "음악":
            this.url = "http://kbssymphony.org/2013_new/cheditor/attach/FcUC88O7YecfouUs.jpg"
            break;
          case "무용":
            this.url = "http://ph.joongboo.com/news/photo/201704/1158048_1050772_4035.jpg"
        }
      }
    },
  }
</script>
