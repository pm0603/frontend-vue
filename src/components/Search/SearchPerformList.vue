<template>
  <section class="performance-list">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12" v-for="post in posts">
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
    <div class="row" v-show="morebtn">
      <button v-show="!loading" @click.prevent="nextPage" class="loading-button">더보기</button>
    </div>
    <div v-show="loading" class="row load">
      <i class="fa fa-ticket fa-4x loading" aria-hidden="true"></i>
    </div>
    <div v-show="usermsg" class="search-none">
      <p><span>'{{searchTerm}}'</span>와 일치하는 검색결과가 없습니다.</p>
      <p>한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.</p>
      <p>검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.</p>
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
      loading: false,
      morebtn: true,
      usermsg: false,
      search: this.$route.query.q
    }
  },
  computed: {
    searchTerm: function() {
      return this.search = this.$route.query.q;
    }
  },
  created: function() {
    this.getData()
  },
  methods: {
    getData: function() {
        this.loading = true;
        const baseURI = 'http://api.pm0603.com';
        // {{$route.query.term}}
        // http://www.pm0603.com/api/detail/?search=뮤지컬
        console.log('this.$route.fullPath:', this.$route.fullPath);
        console.log('this.$route.query:', this.$route.query);
        console.log('this.$route.path:', this.$route.path);
        // {q: this.$route.query.q, area: undefined, ordering: this.$route.query.ordering, realm_name: this.$route.query.realm_name}
        // axios.get(`${baseURI}/api_content/?${this.$route.fullPath}`)
        axios.get('/api_content/?', {
                  params: this.$route.query
                })
            .then(result => {
              console.log('this.$route.query.q:',this.$route.query.q);
              // console.log('result.data.results.length:',result.data.results.length);
              if (result.data.results.length>0 || this.$route.query.q === undefined){
                this.morebtn = true;
                // posts에 data results 추가
                this.posts = result.data.results;
                // next page 링크를 기억
                this.next = result.data.next;
                // console.log('this.next:',this.next);
                if(!this.next){
                  this.morebtn = false;
                }
                // loading -> false로 변경
                this.loading = false;
              }
              else {
                // loading -> false로 변경
                this.loading = false;
                this.morebtn = false;
                this.usermsg = true;
              }
              // console.log('this.posts:', this.posts);
            })
            .catch(e=> {
              this.errors.push(e)
            })
    },
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
            if(!this.next){
              this.morebtn = false;
            }
          })
          .catch(e=> {
            this.errors.push(e)
          })
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
                    // console.log('로그인없이 할경우:',response);
                      // if(response.status)
                      window.alert('북마크가 추가되었습니다.');
                      this.loading = false;
                      this.list = response.data.results;
                  });

        } else {
          // 로그인 안됐을때
          window.alert('로그인을 해주세요');
        }
      }
  },

  watch: {
    '$route' () {
      this.posts = [];
      if(this.usermsg) {
        this.usermsg = false;
      }
      this.getData();
    }
  }
}
</script>
