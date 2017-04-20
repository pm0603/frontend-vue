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
            <div class="tab-item" id="tab_0"  @click.prevent="Showtab" >
               <!--style="display: block; background-color: red;"-->
              <div class="tab_content">
                내용은 내용내용
              </div>
            </div>
            <div class="tab-item" id="tab_1"  @click.prevent="Showtab" >
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
      post: [],
      errors: []
    }
  },
  created: function() {
    const baseURI = 'http://api.pm0603.com';
    axios.get(`${baseURI}/api_content/?seq=${this.$route.params.id}`)
        .then(result => {
          // Add data to posts
          this.post = result.data.results[0];
        })
        .catch(e=> {
          this.errors.push(e)
        })
  },
  methods: {
    Showtab: function Showtab(val) {
        for(i=0; i<tabItem.length; i++) {
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
