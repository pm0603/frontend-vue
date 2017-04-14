<template>
  <main class="search-main">
    <search-bar></search-bar>
    <search-category></search-category>
    <search-perform-list></search-perform-list>
    <!-- <router-view name="searchPerfoemList"></router-view> -->
  </main>
</template>

<script>
  import SearchBar         from './SearchBar.vue';
  import SearchCategory    from './SearchCategory.vue';
  import SearchPerformList from './SearchPerformList.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      searchBar:         SearchBar,
      searchCategory:    SearchCategory,
      searchPerformList: SearchPerformList
    },
  }

</script>
