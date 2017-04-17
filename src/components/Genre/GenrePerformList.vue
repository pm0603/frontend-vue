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
            <button class="card-button">Detail</button>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-show="morebtn">
      <button v-show="!loading" @click.prevent="nextPage" class="loading-button">SHOW ME MORE</button>
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
      loading: false,
      morebtn: true,
      genre: this.$route.query.k
    }
  },
  computed: {
    searchTerm: function() {
      return this.search = this.$route.query.q;
    }
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
        this.loading = true;
        const baseURI = 'http://api.pm0603.com';
        // {{$route.query.term}}
        // http://www.pm0603.com/api/detail/?search=뮤지컬
        axios.get(`${baseURI}/content/api/?realm_name=${this.$route.query.k}`)
            .then(result => {
              console.log('this.$route.query.q:',this.$route.query.k);
              console.log('result.data.results.length:',result.data.results.length);
              if (result.data.results.length>0){
                // posts에 data results 추가
                this.posts = result.data.results;
                // next page 링크를 기억
                this.next = result.data.next;
                console.log('this.next:',this.next);
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
              }
              console.log('this.posts:', this.posts);
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
    }
  },
  watch: {
    '$route' () {
      this.posts = [];
      this.getData();
    }
  }
}
</script>
