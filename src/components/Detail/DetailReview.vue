<template>
    <section class="review-section">
      <div class="row">
          <fieldset class="status-wrapper">
            <legend class="status-title">Attendee Reviews <span>(123)</span></legend>

            <div class="review-item">
              <div class="status-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <span class="status-gauge"></span>
            </div>
            <div class="review-item">
              <div class="status-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <span class="status-gauge"></span>
            </div>
            <div class="review-item">
              <div class="status-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <span class="status-gauge"></span>
            </div>
            <div class="review-item">
              <div class="status-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <span class="status-gauge"></span>
            </div>
            <div class="review-item">
              <div class="status-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <span class="status-gauge"></span>
            </div>
          </fieldset>

          <div class="review">
              <li class="on">
            		<div id="review-list">
                  <a href="" class="user-name">
            				<em class="link_profile">{{review.id}}</em>
                  </a>님의 리뷰

            			<p class="desc-review">zxczxczc{{review.body}}</p>
                </div>
            	</li>

              <div class="review-input">
                <textarea name="contents">리뷰를 작성해주세요.</textarea>
                <button @click.prevent="inputReview" type="button" name="button">제출</button>
              </div>
          </div>

      </div>
    </section>
</template>

<script>
export default{
  data(){
    return{
      review: []
      }
    },
  created: function() {
    const baseURI = 'http://api.pm0603.com';
    axios.get(`${baseURI}/api_comment/?content_d=${this.$route.params.id}`)
        .then(result => {
          // Add data to posts
          console.log('reviewresult:', result);
          this.user_input = result.data.results;
        })
        .catch(e=> {
          this.errors.push(e)
        })
  },
  methods: {
    inputReview: function() {

    }
  }

}
</script>
