<template>
  <div class="genre">
    <genre-heading></genre-heading>
    <genre-category></genre-category>
    <genre-perform-list></genre-perform-list>
  </div>
</template>

<script>
  import GenreHeading     from './GenreHeading.vue';
  import GenreCategory    from './GenreCategory.vue';
  import GenrePerformList from './GenrePerformList.vue';

  export default {
    components: {
      genreHeading:     GenreHeading,
      genreCategory :   GenreCategory,
      genrePerformList: GenrePerformList
    }
  }

</script>
