<template>
  <section class="image-section">
    <div class="main-image">
      <div :style="{ 'background-image': 'url(' + url + ')' }" class="image">
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
</template>

<script>
export default{
  data(){
    return{
      post: [],
      errors: [],
      url: null
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
  updated: function() {
    this.backgroundImage();
  },
  methods: {
    backgroundImage: function() {
      let genreName = this.post.realm_name;
      switch(genreName) {
        case "연극":
          this.url = "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/UserUpload/Editor/15/04/09/150409_211631_PlayReview_ful7.jpg"
          break;
        case "미술":
          this.url = "http://www.daelimmuseum.org/att/[357099_362478]20170210180118.jpg"
          break;
        case "음악":
          this.url = "http://kbssymphony.org/2013_new/cheditor/attach/FcUC88O7YecfouUs.jpg"
          break;
        case "무용":
          this.url = "http://ph.joongboo.com/news/photo/201704/1158048_1050772_4035.jpg"
          break;
        default:
          this.url = "http://az616578.vo.msecnd.net/files/2016/06/30/636029240982230102667140873_635945327802088955996706849_o-ROCK-CONCERT-facebook.jpg"
      }
    }
  },
}
</script>
