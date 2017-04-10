<template>
  <section class="performance-list">
    <h2>Now Trending in London</h2>
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"
           v-for="post in posts">
        <div class="card">
          <div class="card-image">
            <figure class="card-image-medium"><img :src="post.thumbnail"></figure>
          </div>
          <div class="card-content">
            <p class="card-title">
              <a>{{post.title}}</a>
            </p>
            <ul class="card-list">
              <li class="card-list-item"><span class="card-icon">☞</span>{{post.end_date}}</li>
              <li class="card-list-item"><span class="card-icon">☞</span>{{post.area}}</li>
            </ul>
            <div class="card-footer">
              <div class="card-price">{{post.price}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <button @click.prevent="nextPage" class="button is-danger is-textInverted">SHOW ME MORE</button>
    </div>
  </section>
</template>
<!-- call axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default{
  data(){
    return{
      // itemM : ['image', 'image', 'image', 'image', 'image','image'],
      // 객체 저장할 array
      posts: [],
      errors: [],
      next: null
    }
  },
  created: function() {
      // using JSONPlaceholder
      // firebase data url
      // http://www.pm0603.com/api/area/?page=1
      // next : ~
      const baseURI = 'http://www.pm0603.com/api/area';
      axios.get(`${baseURI}/?page=1`)
          .then(result => {
            console.log('result',result);
            // Add data to posts
            this.posts = result.data.results;
            console.log('posts:',this.posts);
            this.next = result.data.next;
            console.log('next:',this.next);
          })
          .catch(e=> {
            this.errors.push(e)
          })
  },
  methods: {
    nextPage: function(){
      axios.get(this.next)
          .then(result => {
            console.log('result',result);
            // Add data to posts
            let performList = result.data.results;
            for (var i=0; i<performList.length; i++) {
              this.posts.push(performList[i]);
            }
            console.log('posts:',this.posts);
            this.next = result.data.next;
            console.log('next:',this.next);
          })
          .catch(e=> {
            this.errors.push(e)
          })
    }
  }

}
</script>
