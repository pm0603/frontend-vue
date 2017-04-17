<template>
       <section class="description-section">
          <div class="row">
            <div class="description-contents" v-for="post in posts">
              <span class="description-contents-text">
                <h1>{{post.title}}</h1>
                <p>{{post.content}}</p>
              </span>
            </div>
          </div>
        </section>
</template>
<script>
export default{
  data(){
    return{
      posts: []
    }
  },
  created: function() {
      // using JSONPlaceholder
      // firebase data url
      const baseURI = 'https://detail-a2b27.firebaseio.com/.json';
      // get Data
      axios.get(baseURI)
           .then((result) => {
              console.log(result)
              // Add data to posts
              this.posts = result.data
           })
    },
  // Vue Directive, Filter, Mixin
  // Vue.directive('only-text', {
  //   bind(el, binding, vnode){
  //     let content = binding.value;
  //     let d = document.createDocumentFragment();
  //     d.createElement( document.createElement('div') );
  //     let dd = d.firstChild;
  //     dd.innerHTML = content;
  //     el.innerHTML = dd.textContent;
  //     d.firstChild.innerHTML = '';
  //   }
  // });
}
</script>
