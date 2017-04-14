<template>
  <form class="searchbar">
    <input type="text" name="research" v-model="searchTerm" autofocus>
    <button @click.prevent="inputValue">
      <!-- <router-link tag="button"
                   :to="{
                     params: '/search',
                     query: {q: searchTerm}
                     }"> -->
        <svg width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" fill-rule="evenodd">
          <ellipse cx="9.294" cy="9.262" rx="8.294" ry="8.262"></ellipse>
          <path d="M15.5 15.5l7 7"></path>
        </g>
        </svg>
      <!-- </router-link> -->
    </button>
  </form>
</template>

<script>
  export default {
  data() {
    return {
      searchTerm: this.$route.query.q
    }
  },
  methods: {
    inputValue: function() {
      let inputValue = document.querySelector('input[name="research"]').value;
      console.log(inputValue);
      console.log(this.searchTerm);
      this.$router.push({path: '/search', query: {q: inputValue}});
      // window.location.reload();
    }
  },
  // activated: {
  //   function() {
  //     let inputValue = document.querySelector('input[name="research"]').value;
  //     console.log(inputValue);
  //     this.$router.push({path: '/search', query: {q: inputValue}});
  //   }
  // }
}
</script>
