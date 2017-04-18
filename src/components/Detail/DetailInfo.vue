<template>
     <section class="info-section">
          <div class="info-section-wrapper">
            <div class="info-contents">
              <ul class="card-list">
                <li class="card-list-item"><span class="card-icon">☞</span>{{post.end_date}}</li>
                <li class="card-list-item"><span class="card-icon">☞</span>{{post.area}}</li>
                <li class="card-list-item"><span class="card-icon">☞</span>{{post.place}}</li>
              </ul>
            </div>
            <div class="info-button">
              <button class="button" type="button" name="button">
                <span>GET TICKETS &gt; </span>
              </button>
            </div>
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
    const baseURI = 'http://api.pm0603.com/api_content/';
    axios.get(`${baseURI}/api_content/?seq=`)
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
