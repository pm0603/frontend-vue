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
      <button class="button is-danger is-textInverted">SHOW ME MORE</button>
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
      posts: []
    }
  },
  created: function() {
      // using JSONPlaceholder
      // firebase data url
      const baseURI = 'https://show-api.firebaseio.com/.json';
      // get Data
      axios.get(baseURI)
           .then((result) => {
              console.log(result)
              // Add data to posts
              this.posts = result.data
           })
    },

}
</script>
