<template>
  <section class="genre-list">
    <div class="wrapper">
      <h2>장르별 공연 리스트</h2>
      <div class="row" >
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12" v-for="(genrelist, index) in genreLists" >
          <router-link :to="'/genre?realm_name=' + genrelist.link" tag="a" active-class="current-page">
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
            {genre: "연극·뮤지컬",
            link: "연극",
            desc: "무대의 생동감, 현장감을 느끼고 싶은 당신에게 추천합니다.",
            image: "http://cfile8.uf.tistory.com/image/225CB1415209FD2B03DF76"},
            {genre: "전시",
            link: "미술",
            desc: "주말을 색다르게 즐기는 방법은? 지금이 아니면 볼 수 없는 미술 전시를 찾는 것!",
            image: "http://www.daelimmuseum.org/att/[357099_362478]20170210180118.jpg"},
            {genre: "음악",
            link: "음악",
            desc: "클래식 테마를 따라 펼쳐지는 아름다운 클래식 음악의 향연을 느껴보고 싶다면...",
            image: "http://kbssymphony.org/2013_new/cheditor/attach/FcUC88O7YecfouUs.jpg"},
            {genre: "무용",
            link: "무용",
            desc: "역동적인 리듬과 무용단의 예술적인 몸짓이 조화를 이루는 공연을 준비했습니다.",
            image: "http://ph.joongboo.com/news/photo/201704/1158048_1050772_4035.jpg"},
          ]
      }
    }
  }
</script>
