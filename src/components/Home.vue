<template>
    <section>
        <main-search></main-search>
        <main-perform-list></main-perform-list>
        <main-genre-list></main-genre-list>
        <main-footer></main-footer>
    </section>
</template>

<script>
    import MainSearch      from './Main/MainSearch.vue';
    import MainPerformList from './Main/MainPerformList.vue';
    import MainGenreList   from './Main/MainGenreList.vue';
    import MainFooter      from './Main/MainFooter.vue';

    export default{
        components: {
            mainSearch:      MainSearch,
            mainPerformList: MainPerformList,
            mainGenreList:   MainGenreList,
            mainFooter:      MainFooter
        }
    }
</script>
