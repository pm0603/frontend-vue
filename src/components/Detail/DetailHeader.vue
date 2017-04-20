<template>
  <section class="image-section">
    <div class="main-image">
      <div :style="{ 'background-image': 'url(' + post.thumbnail + ')' }" class="image">
        <div class="main-image-content-up">
          <h1 class="main-image-title" style='text-shadow: gray 2px 2px;'>{{post.title}}</h1>
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
      errors: []
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
  }
}
</script>
