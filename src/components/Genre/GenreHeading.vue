<template>
  <h2 class="genre-heading" :style="{ 'background-image': 'url(' + url+ ')' }">
    {{genreTerm}} 공연 리스트
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
        return this.genre = this.$route.query.realm_name;
      }
    },
    beforeUpdate: function() {
      this.backgroundImage();
    },
    methods: {
      backgroundImage: function() {
        let genreurl = this.$route.query.realm_name;
        switch(genreurl) {
          case "연극":
            this.url = "http://www.newstage.co.kr/PEG/13153827297080.jpg"
            console.log('this.url:', this.url);
            break;
          case "미술":
            this.url = "http://www.artmuseums.kr/2015/205/ga205-1.jpg"
            break;
          case "음악":
            this.url = "http://www.arko.or.kr/cwboard/fileupload/board/36/20111116202714697.jpg"
            break;
          case "콘서트":
            this.url = "http://www.iamsterdam.com/media/agenda/festivals/ade/loveland-deepdish-amsterdam-dance-event-coen-van-tartwijk.jpg"
        }
      }
    },
  }
</script>
