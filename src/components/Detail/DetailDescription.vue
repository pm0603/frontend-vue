<template>
       <section class="description-section">
          <div class="row">
            <div class="description-contents">
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
