<template>
  <div class="search">
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
            selectedValue: null
          },
          {
            name: "공연일자",
            category: ["공연시작일", "공연마감일"],
            isActive: false,
            selected: false,
            selectedValue: null
          },
          {
            name: "장르",
            category: ["연극", "미술", "음악", "콘서트"],
            isActive: false,
            selected: false,
            selectedValue: null
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
        console.log('list:', list);
        console.log('index:', filter);
        console.log('this.filters:', this.filters);
        // console.log('this.filters[index].selected:', this.filters[index].selected);
        filter.isActive = false
        filter.selected = true
        filter.selectedValue = list
      },
      offFilter(index) {
        this.filters[index].selected = false
      }
    //   menuToggleClass1(){
    //     if (this.$el.children[0].children[1].classList.length === 1){
    //       for(var i=0; i<this.$el.children.length; i++) {
    //         // this.$el.children[i].classList.toggle('category-active');
    //         this.$el.children[i].children[1].classList.remove('dropdown');
    //       }
    //       this.$refs.toggle1.classList.toggle('dropdown');
    //     }
    //     else {this.$refs.toggle1.classList.toggle('dropdown');}
    //   },
    //   menuToggleClass2(){
    //     if (this.$el.children[1].children[1].classList.length === 1){
    //       for(var i=0; i<this.$el.children.length; i++) {
    //         // this.$el.children[i].classList.toggle('category-active');
    //         this.$el.children[i].children[1].classList.remove('dropdown');
    //       }
    //       this.$refs.toggle2.classList.toggle('dropdown');
    //     }
    //     else {this.$refs.toggle2.classList.toggle('dropdown');}
    //   },
    //   menuToggleClass3(){
    //     if (this.$el.children[2].children[1].classList.length === 1){
    //       for(var i=0; i<this.$el.children.length; i++) {
    //         // this.$el.children[i].classList.toggle('category-active');
    //         this.$el.children[i].children[1].classList.remove('dropdown');
    //       }
    //       this.$refs.toggle3.classList.toggle('dropdown');
    //     }
    //     else {this.$refs.toggle3.classList.toggle('dropdown');}
    //   },
    }
  }
</script>
