<template>
     <section class="info-section">
          <div class="info-section-wrapper">
            <div class="info-contents">
              <ul class="card-list">
                <li class="card-list-item"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{post.start_date}} ~ {{post.end_date}}</li>
                <li class="card-list-item"><i class="fa fa-ticket" aria-hidden="true"></i> {{post.price}}</li>
                <li class="card-list-item"><i class="fa fa-university" aria-hidden="true"></i> {{post.place}}</li>
              </ul>
            </div>
            <div class="info-button">
              <a :href="url" target="_blank" @click="goToHomepage">예매 페이지 바로가기</a>
            </div>
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
        })
  },
  methods: {
    goToHomepage() {
      this.url = this.post.place_url
    }
  }

}
</script>
