<template>
  <div class="container">
    <section class="image-section">
      <div class="main-image">
        <div :style="{ 'background-image': 'url(' + imageLink + ')' }" class="image">
          <div class="main-image-content-up">
            <h1 class="main-image-title">{{post.title}}</h1>
            <div class="tag is-info">{{post.realm_name}}</div>
          </div>
        </div>
      </div>
      <div class="main-image-content-down"  style='text-shadow: gray 2px 2px;'>
        <h1 class="main-image-title">{{post.title}}</h1>
        <div class="tag is-info">{{post.realm_name}}</div>
      </div>
    </section>
    <section class="info-section">
      <div class="info-section-wrapper">
        <div class="info-contents">
          <ul class="card-list">
            <li class="card-list-item"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{post.start_date}} ~ {{post.end_date}}</li>
            <li class="card-list-item"><i class="fa fa-ticket" aria-hidden="true"></i> {{post.price}}</li>
            <li class="card-list-item"><i class="fa fa-university" aria-hidden="true"></i> {{post.place}}</li>
          </ul>
        </div>
        <div class="info-button">
          <a :href="url" target="_blank" @click="goToHomepage">예매 페이지 바로가기</a>
        </div>
      </div>
    </section>
    <section class="description-section">
      <div class="row">
        <div class="description-contents">
          <div class="detail-content">{{post.content}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default{
  data(){
    return{
      post: [],
      errors: [],
      imageLink: null,
      url: null
    }
  },
  created: function() {
    const baseURI = 'http://api.pm0603.com';
    axios.get(`${baseURI}/api_content/?seq=${this.$route.params.id}`)
        .then(result => {
          // Add data to posts
          console.log('q:', this.$route.params.id);
          console.log('result:',result);
          console.log('this:', this);
          this.post = result.data.results[0];
        })
        .catch(e=> {
          this.errors.push(e)
        });
  },
  updated: function() {
    this.backgroundImage();
    var content = document.querySelector('.detail-content');
    content.innerHTML = this.postContent(content.innerHTML);
  },
  methods: {
    backgroundImage: function() {
      console.log('this.post.realm_name:', this.post.realm_name);
      let genreName = this.post.realm_name;
      switch(genreName) {
        case "연극":
          this.imageLink = "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/UserUpload/Editor/15/04/09/150409_211631_PlayReview_ful7.jpg"
          break;
        case "미술":
          this.imageLink = "http://www.artmuseums.kr/2015/205/ga205-1.jpg"
          break;
        case "음악":
          this.imageLink = "http://news20.busan.com/content/image/2016/11/16/20161116000228_0.jpg"
          break;
        case "무용":
          this.imageLink = "http://ph.joongboo.com/news/photo/201704/1158048_1050772_4035.jpg"
          break;
        default:
          this.imageLink = "http://az616578.vo.msecnd.net/files/2016/06/30/636029240982230102667140873_635945327802088955996706849_o-ROCK-CONCERT-facebook.jpg"
      }
    },
    goToHomepage() {
      this.url = this.post.place_url
      console.log("place_url", this.post.place_url);
    },
    postContent: function(text) {
      text = text.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
      return text
    }
  },

}

</script>
