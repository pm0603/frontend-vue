<template>
  <form class="searchbar">
    <input type="text" v-model="searchTerm" autofocus>
    <button>
      <svg width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" fill-rule="evenodd">
        <ellipse cx="9.294" cy="9.262" rx="8.294" ry="8.262"></ellipse>
        <path d="M15.5 15.5l7 7"></path>
      </g>
      </svg>
    </button>
  </form>
</template>

<script>
  export default {
  data() {
    return {
      searchTerm: this.$route.query.term
    }
  }
}
</script>
