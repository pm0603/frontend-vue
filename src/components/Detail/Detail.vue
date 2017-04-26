<template>
  <div class="container">
    <section class="image-section">
      <div class="main-image">
        <div :style="{ 'background-image': 'url(' + imageLink + ')' }" class="image">
          <div class="main-image-content-up wrapper">
            <div class="tag is-info">{{post.realm_name}}</div>
            <h1 class="main-image-title">{{post.title}}</h1>
          </div>
        </div>
      </div>
      <div class="main-image-content-down">
        <div class="tag is-info">{{post.realm_name}}</div>
        <h1 class="main-image-title">{{post.title}}</h1>
      </div>
    </section>
    <section class="info-section">
      <div class="info-section-wrapper wrapper">
        <div class="info-contents col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <ul class="card-list">
            <li class="card-list-item"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{post.start_date}} ~ {{post.end_date}}</li>
            <li class="card-list-item"><i class="fa fa-ticket" aria-hidden="true"></i> {{post.price}}</li>
            <li class="card-list-item"><i class="fa fa-phone" aria-hidden="true"></i> {{post.phone}}</li>
            <li class="card-list-item"><i class="fa fa-map-o" aria-hidden="true"></i> {{post.area}}</li>
            <li class="card-list-item"><i class="fa fa-university" aria-hidden="true"></i> {{post.place}}</li>
          </ul>
        </div>
        <div class="info-button col-sm-12 col-md-12 col-lg-4 col-xl-4" id="animate">
          <div class="detail-card-content hidden">
            <p class="detail-card-heading">{{post.title}}</p>
            <ul class="card-list">
              <li class="card-list-item">
                <span class="card-icon"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                {{post.start_date}} ~ {{post.end_date}}</li>
              <li class="card-list-item">
                <span class="card-icon"><i class="fa fa-ticket" aria-hidden="true"></i></span>
                {{post.price}}</li>
              <li class="card-list-item">
                <span class="card-icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                  {{post.phone}}</li>
              <li class="card-list-item">
                <span class="card-icon"><i class="fa fa-university" aria-hidden="true"></i></span>
                {{post.place}}</li>
            </ul>
          </div>
          <div class="book detail-bookmark">
            <button type="button" @click.prevent="addBookmark(post.id)">
                  <i class="fa fa-bookmark" aria-hidden="true"></i>북마크 하기
            </button>
          </div>
          <a :href="url" target="_blank" @click="goToHomepage">예매 페이지 바로가기</a>

        </div>
      </div>
    </section>
    <section class="description-section">
      <div class="wrapper">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div class="detail-content">{{post.content}}</div>
          </div>
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
      url: null,
    }
  },
  created: function() {
    const baseURI = 'http://api.pm0603.com';
    axios.get(`${baseURI}/api_content/?seq=${this.$route.params.id}`)
        .then(result => {
          // Add data to posts
          this.post = result.data.results[0];
        })
        .catch(e=> {
          this.errors.push(e)
        });
  },
  mounted: function() {
    this.scrollItem();
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  updated: function() {
    this.backgroundImage();
    var content = document.querySelector('.detail-content');
    content.innerHTML = this.postContent(content.innerHTML);
  },
  methods: {
    backgroundImage: function() {
      let genreName = this.post.realm_name;
      switch(genreName) {
        case "연극":
          this.imageLink = "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/UserUpload/Editor/15/04/09/150409_211631_PlayReview_ful7.jpg"
          break;
        case "미술":
          this.imageLink = "http://www.artmuseums.kr/2015/205/ga205-1.jpg"
          break;
        case "음악":
          this.imageLink = "https://i.ytimg.com/vi/LTVReClcI6g/maxresdefault.jpg"
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
    },
    postContent: function(text) {
      text = text.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
      return text
    },
    scrollItem: function() {
      // scroll magic
      var controller = new ScrollMagic.Controller();
      var scene = new ScrollMagic.Scene({
    		triggerElement: "#animate",
    		triggerHook: 0,
    		// reverse: false
    	})
    		.setPin("#animate")
    	 	.setClassToggle("#animate", 'fade-in')
    		// .addIndicators()
    		.addTo(controller);
    },
    addBookmark(contentId){
        var id = new FormData();
        id.append('content',contentId);

        if(localStorage.token){
           axios.post('/api/bookmark/create',id,
                  {
                      headers: {'Authorization': 'Token '+localStorage.token},
                  })
                  .then(function(response){
                      window.alert('북마크가 추가되었습니다.');
                  });

        } else {
          window.alert('로그인을 해주세요');
        }
      }
  },

}

</script>
