<template>
    <main class="main" id="gotocontent">
    <div class="main-search">
      <h2>{{mainTitle}}</h2>
      <p>당신을 위한 공연, 전시 정보를 한곳에!</p>
      <form class="searchbar">
        <input type="text" name="search" placeholder="관심있는 공연, 전시를 검색해보세요." autofocus>
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

    computed: {

      mainTitle(){
        let title     = localStorage.name;
        let loginStat = this.$store.getters.getUserLoginStatus;

        if( !loginStat && !title ){
          title = this.$store.getters.getMainTitle;
        } else if( title == undefined ){
          title = this.$store.getters.getMainTitle;
        } else {
          title += '님, 환영합니다.';
        }
        return title;
      }
    },
    methods: {
      inputValue: function() {
        let inputValue = document.querySelector('input[name="search"]').value;
        this.$router.push({path: `/search`, query: {q: inputValue}});
      }
    }
  }
</script>
