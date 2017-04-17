<template>
  <section class="genre-list">
    <div class="wrapper">
      <h2>Our Collections</h2>
      <div class="row" >
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12" v-for="(genrelist, index) in genreLists" >
          <router-link :to="genrelist.link" tag="a" active-class="current-page">
            <div class="card-side">
              <div :style="{ 'background-image': 'url(' + genrelist.image + ')' }" class="card-image-wide">
              </div>
              <div class="card-content-wide">
                <p class="card-title">{{genrelist.genre}}</p>
                <p class="card-about">{{genrelist.desc}}</p>
                 <div class="card-footer">
                   <button type="button" class="card-footer-btn">더보기</button>
                 </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return{
          genreLists: [
            {genre: "연극",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, earum!",
            link: "/genre?k=연극",
            image: "http://www.newstage.co.kr/PEG/13153827297080.jpg"},
            {genre: "미술",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, tempora.",
            link: "/genre?k=미술",
            image: "http://www.artmuseums.kr/2015/205/ga205-1.jpg"},
            {genre: "음악",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ex.",
            link: "/genre?k=음악",
            image: "http://www.arko.or.kr/cwboard/fileupload/board/36/20111116202714697.jpg"},
            {genre: "콘서트",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
            link: "/genre?k=콘서트",
            image: "http://www.iamsterdam.com/media/agenda/festivals/ade/loveland-deepdish-amsterdam-dance-event-coen-van-tartwijk.jpg"},
          ]
      }
    }
  }
</script>
