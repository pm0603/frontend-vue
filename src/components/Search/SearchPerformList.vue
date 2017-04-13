<template>
  <section class="performance-list">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12" v-for="post in posts">
        <div class="card">
          <div :style="{ 'background-image': 'url(' + post.thumbnail + ')' }" class="card-image">
          </div>
          <button class="bookmark"><i class="fa fa-bookmark fa-2x" aria-hidden="true"></i></button>
          <div class="card-content">
            <p class="card-title">
              <a>{{post.title}}</a>
            </p>
            <ul class="card-list">
              <li class="card-list-item">
                <span class="card-icon"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                {{post.end_date}}</li>
              <li class="card-list-item">
                <span class="card-icon"><i class="fa fa-map-o" aria-hidden="true"></i></span>
                {{post.area}}</li>
            </ul>
            <!-- <div class="card-footer"> -->
              <!-- <div class="card-price">{{post.price}}</div> -->
            <button class="card-button">Detail</button>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-show="lists">
      <button v-show="!loading" @click.prevent="nextPage" class="loading-button">SHOW ME MORE</button>
    </div>
    <div v-show="loading" class="row load">
      <i class="fa fa-ticket fa-4x loading" aria-hidden="true"></i>
    </div>
    <div v-show="!lists" class="search-none">
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
      lists: true,
      searchTerm: this.$route.query.q
    }
  },
  created: function() {
      this.loading = true;
      // const baseURI = 'http://www.pm0603.com/content/api/';
      // {{$route.query.term}}
      // http://www.pm0603.com/api/detail/?search=뮤지컬
      axios.get(`/content/api/?search=${this.$route.query.q}`)
          .then(result => {
            console.log(result.data.results.length);
            if (result.data.results.length>0){
              // posts에 data results 추가
              this.posts = result.data.results;
              // next page 링크를 기억
              this.next = result.data.next;
              // loading -> false로 변경
              this.loading = false;
            }
            else {
              // loading -> false로 변경
              this.loading = false;
              this.lists = false;
            }
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
            this.errors.push(e)
          })
    }
  },

}
</script>
