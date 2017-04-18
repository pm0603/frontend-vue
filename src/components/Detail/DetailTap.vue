<template>
     <!-- <section class="tap-section"> -->
        <section class="tab-section">
          <div class="block">
            <div class="tab">
              <ul class="tab_list">
                <!-- <li><span @click="Showtab">공연날짜</span></li><li> -->
                  <!-- <span @click="Showtab">상세좌석</span></li> -->
              </ul>
            </div>
          </div>
          <div class="tab_contents">
            <div class="tab-item" id="tab_0" >
              <div class="tab_content">
                내용은 내용내용
              </div>
            </div>
            <div class="tab-item" id="tab_1">
              <div class="tab_content">
                내용은 내용내용
              </div>
            </div>
          </div>
        </section>
      <!-- </section> -->
</template>

<script>
export default{
  data(){
    return{
      posts: [],
      errors: []
    }
  },
  created: function() {
    const baseURI = 'http://api.pm0603.com/api_content/';
    axios.get(`${baseURI}/api_content/?page=1`)
        .then(result => {
          // Add data to posts
          this.posts = result.data.results;
        })
        .catch(e=> {
          this.errors.push(e)
        })
  },
  methods: {
    // var tab_item = document.getElementsByClassName('tab-item');
    // console.log(tab_item);
    Showtab: function Showtab(val) {
        for(i=0; i<tab_item.length; i++) {
          var tb = document.getElementById('tab_'+ i);
          if(i != val) {
            tb.style.display = 'none';
          } else {
            tb.style.display = 'block';
          }
        }
      }
    }

}
</script>
