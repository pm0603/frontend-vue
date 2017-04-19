<template>
  <section class="image-section">
    <div class="main-image">
      <div class="image">
        <div class="main-image-content-up">
          <h1 class="main-image-title">{{post.title}}</h1>
          <div class="tag is-info">{{post.realm_name}}</div>
      </div>
      </div>
    </div>

    <div class="main-image-content-down">
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
}
</script>
