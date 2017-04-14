<template>
    <main class="main">
    <div class="main-search">
      <h2>Live Your city</h2>
      <p>We uncover the best events every day</p>
      <form class="searchbar">
        <input type="text" name="search" placeholder="Search by event, area, ot venue..." autofocus>
        <button @click.prevent="inputValue">
          <svg width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" fill-rule="evenodd">
            <ellipse cx="9.294" cy="9.262" rx="8.294" ry="8.262"></ellipse>
            <path d="M15.5 15.5l7 7"></path>
          </g>
          </svg>
        </button>
      </form>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return{
      }
    },
    methods: {
      inputValue: function() {
        let inputValue = document.querySelector('input[name="search"]').value;
        console.log(inputValue);
        this.$router.push({path: `/search`, query: {q: inputValue}});
      }
    }
  }
</script>
