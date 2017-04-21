<template>
  <section class="description-section">
    <div class="row">
      <div class="description-contents">
        <div class="detail-content">{{post.content}}</div>
      </div>
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
          this.post = result.data.results[0];
        })
        .catch(e=> {
          this.errors.push(e)
        })

  },
  methods: {
    postContent: function(text) {
      text = text.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
      return text
    }
  },
  updated: function() {
    // Replace HTML <, /, > to &lt, &quot, &gt
    var content = document.querySelector('.detail-content');
    content.innerHTML = this.postContent(content.innerHTML);
  }
}
</script>
