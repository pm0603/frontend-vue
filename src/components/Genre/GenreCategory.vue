<template>
  <div class="search search-cat">
    <div class="search-category" v-for="(filter, index) in filters">
      <a href="#" class="category-all" @click.prevent="toggleClass(filter, index)">{{filter.name}}</a>
      <ul class="none" :class="{ dropdown: filter.isActive }">
        <li v-for="list in filter.category"><a href="#" @click.prevent="searchFilter(list, filter)">{{list}}</a></li>
      </ul>
      <div class="selected" v-show="filter.selected">
        <button type="button" @click.prevent="offFilter(index)"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>
        <p>{{filter.selectedValue}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filters: [
          {
            name: "지역",
            category: ["서울", "경기", "부산", "대전"],
            isActive: false,
            selected: false,
            selectedValue: null,
            query: "area"
          },
          {
            name: "공연일자",
            category: ["종료일 빠른순", "종료일 늦은순"],
            isActive: false,
            selected: false,
            selectedValue: null,
            query: "end_date"
          },
          {
            name: "장르",
            category: ["연극", "미술", "음악", "콘서트"],
            isActive: false,
            selected: false,
            selectedValue: null,
            query: "realm_name"
          }
       ],
      }
    },
    methods: {
      toggleClass(filter, index) {
        if(filter.isActive === false) {
        for (var i=0; i<this.filters.length; i++) {
          this.filters[i].isActive = false;
        }
        }
        filter.isActive = !filter.isActive;
      },
      searchFilter(list, filter) {
        filter.isActive = false;
        filter.selected = true;
        filter.selectedValue = list;
        if (filter === this.filters[0]) {
          this.$router.push({path: this.$route.fullPath, query: {area: list}});
        }
        else if (filter === this.filters[1]) {
          if (list === "종료일 빠른순") {
            this.$router.push({path: this.$route.fullPath, query: {ordering: "end_date"}});
          }
          else {
            this.$router.push({path: this.$route.fullPath, query: {ordering: "-end_date"}});
          }
        }
        else if (filter === this.filters[2]) {
          this.$router.push({path: this.$route.fullPath, query: {realm_name: list}});
        }
      },
      offFilter(index) {
        this.filters[index].selected = false
        let deleteQuery = this.filters[index].query;
        if (deleteQuery === "area") {
          this.$router.push({path: '/search', query: {area: undefined, ordering: this.$route.query.ordering, realm_name: this.$route.query.realm_name}});
        }
        else if (deleteQuery === "end_date") {
          this.$router.push({path: '/search', query: {area: this.$route.query.area, ordering: undefined, realm_name: this.$route.query.realm_name}});
        }
        else if (deleteQuery === "realm_name") {
          this.$router.push({path: '/search', query: {area: this.$route.query.area, ordering: this.$route.query.ordering, realm_name: undefined}});
        }
        // delete route.deleteQuery;
      }
    }
  }
</script>
