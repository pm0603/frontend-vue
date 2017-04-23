<template>
  <section class="genre-list">
    <div class="wrapper">
      <h2>Our Collections</h2>
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
            desc: "다가올 주말에 무엇을 해야 할지 고민이라면? 활기 넘치는 문화의 공간, 대학로에 가보는 건 어떨까.",
            image: "http://cfile8.uf.tistory.com/image/225CB1415209FD2B03DF76"},
            {genre: "전시",
            link: "미술",
            desc: "주말을 가장 색다르게 즐기는 방법은? 지금이 아니면 볼 수 없는 예술 전시를 찾는 것! ",
            image: "http://www.daelimmuseum.org/att/[357099_362478]20170210180118.jpg"},
            {genre: "음악",
            link: "음악",
            desc: "클래식 테마를 따라 펼쳐지는 아름다운 클래식 음악의 향연을 느껴보고 싶다면..",
            image: "http://kbssymphony.org/2013_new/cheditor/attach/FcUC88O7YecfouUs.jpg"},
            {genre: "무용",
            link: "무용",
            desc: "가족이나 친구들과 함께 무용 공연 한 편 감상하면 좋을 때!",
            image: "http://ph.joongboo.com/news/photo/201704/1158048_1050772_4035.jpg"},
          ]
      }
    }
  }
</script>
