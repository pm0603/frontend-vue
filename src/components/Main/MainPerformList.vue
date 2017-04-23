<template>
  <section class="performance-list">
    <div class="wrapper">
      <h2>주목해야 할 공연</h2>
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"
             v-for="post in posts">
          <router-link :to="'/detail/' + post.seq" tag="a" active-class="current-page">
            <div class="card">
              <div :style="{ 'background-image': 'url(' + post.thumbnail + ')' }" class="card-image">
              </div>
              <button class="bookmark" @click.prevent="addBookmark(post.id)"><i class="fa fa-bookmark fa-2x" aria-hidden="true"></i></button>
              <div class="card-content">
                <p class="card-title">
                  <a>{{post.title}}</a>
                </p>
                <ul class="card-list">
                  <li class="card-list-item">
                    <span class="card-icon"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                    {{post.start_date}} ~ {{post.end_date}}</li>
                  <li class="card-list-item">
                    <span class="card-icon"><i class="fa fa-map-o" aria-hidden="true"></i></span>
                    {{post.area}}</li>
                  <li class="card-list-item">
                    <span class="card-icon"><i class="fa fa-university" aria-hidden="true"></i></span>
                    {{post.place}}</li>
                </ul>
                <!-- <div class="card-footer"> -->
                  <!-- <div class="card-price">{{post.price}}</div> -->
                <button class="card-button">자세히</button>
                <!-- </div> -->
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <button v-show="!loading" @click.prevent="nextPage" class="loading-button">더보기</button>
    </div>
    <div v-show="loading" class="row load">
      <i class="fa fa-ticket fa-4x loading" aria-hidden="true"></i>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      posts: [],
      errors: [],
      next: null,
      loading: false
    }
  },
  created: function() {
    const baseURI = 'http://api.pm0603.com';
    axios.get(`${baseURI}/api_content/?page=1`)
        .then(result => {
          // Add data to posts
          this.posts = result.data.results;
          this.next = result.data.next;
        })
        .catch(e=> {
          this.errors.push(e)
        })
  },
  methods: {
    nextPage: function(){
      this.loading = true;
      axios.get(this.next)
          .then(result => {
            // Add data to posts
            let performList = result.data.results;
            for (var i=0; i<performList.length; i++) {
              this.posts.push(performList[i]);
            }
            this.loading = false;
            this.next = result.data.next;
          })
          .catch(e=> {
            // this.errors.push(e)
          })
    },
    // method | add Bookmark
    addBookmark(contentId){

      var _this = this;
      var id = new FormData();
      id.append('content',contentId);

      if( localStorage.token ){

        axios.post('/api/bookmark/create',id,
                  {
                      headers: {'Authorization': 'Token '+localStorage.token},
                  })
                  .then(function(response){
                    console.log('bookmark-response:',response.status);
                      if(response.status === 500 ){
                        window.alert('Network Error');
                      }
                      window.alert('북마크가 추가되었습니다.');
                      _this.loading = false;
                      _this.list = response.data.results;


                  });
        } else {
          window.alert('로그인을 해주세요.');
        }
    }
  }
}
</script>
