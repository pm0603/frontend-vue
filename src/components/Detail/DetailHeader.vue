<template>
    <section class="image-section">
          <div class="main-image">
            <div class="image">
              <div class="main-image-content-up">
                <h1 class="main-image-title">{{post.title}}</h1>
                <div class="tag is-info">ART</div>
            </div>
            </div>
          </div>

          <div class="main-image-content-down">
            <h1 class="main-image-title">{{post.title}}</h1>
            <div class="tag is-info">ART</div>
          </div>
    </section>
</template>

<script>
export default{
  data(){
    return{
      posts: [],
      errors: []
    }
  },
  created: function() {
    const baseURI = 'http://api.pm0603.com/content/api';
    axios.get(`${baseURI}/content/api/?page=1`)
        .then(result => {
          // Add data to posts
          this.posts = result.data.results;
        })
        .catch(e=> {
          this.errors.push(e)
        })
  }
}
</script>
