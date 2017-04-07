<template>
  <section class="performance-list">
    <h2>Now Trending in London</h2>
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"
           v-for="index in itemM">
        <div class="card">
          <div class="card-image">
            <figure class="card-image-medium"><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Koty_musical.jpg"></figure>
          </div>
          <div class="card-content">
            <p class="card-title">
              <a v-for="post in posts"></a>
            </p>
            <ul class="card-list">
              <li class="card-list-item"><span class="card-icon">☞</span>Thursday 23 March, 7:00 PM + 13 more</li>
              <li class="card-list-item"><span class="card-icon">☞</span>Central Hall Westminster, Westminster</li>
            </ul>
            <div class="card-footer">
              <div class="card-price">from $20</div>
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
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
var dbbModel = [
                    'image',
                    'image',
                    'image',
                    'image',
                    'image',
                    'image'
                ];
export default{
  data(){
    return{
      itemM : ['image', 'image', 'image', 'image', 'image','image'],
      posts: []
    }
  },
  created: function() {
      // using JSONPlaceholder
      const baseURI = 'https://pm0603-bb114.firebaseio.com/.json';
      axios.get(baseURI)
           .then((result) => {
              console.log(result)
              this.posts = result.data
           })
    },

}
</script>
