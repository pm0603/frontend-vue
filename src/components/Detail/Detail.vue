<template>
    <div class="container">
        <detail-header></detail-header>
        <detail-info></detail-info>
        <detail-description></detail-description>
        <detail-review></detail-review>
        <detail-map></detail-map>
    </div>
</template>

<script>
import DetailHeader      from './DetailHeader.vue';
import DetailInfo        from './DetailInfo.vue';
import DetailDescription from './DetailDescription.vue';
import DetailReview      from './DetailReview.vue';
import DetailMap         from './DetailMap.vue';
import DetailTap         from './DetailTap.vue';

export default{
        data(){
            return{

            }
        },
        components: {
          detailHeader      : DetailHeader,
          detailInfo        : DetailInfo,
          detailDescription : DetailDescription,
          detailReview      : DetailReview,
          DetailMap         : DetailMap,
          DetailTap         : DetailTap
        }
    }

var tab_item = document.getElementsByClassName('tab-item');
console.log(tab_item);
function Showtab(val) {
  for(i=0; i<tab_item.length; i++) {
    var tb = document.getElementById('tab_'+ i);
    if(i != val) {
      tb.style.display = 'none';
    } else {
      tb.style.display = 'block';
    }
  }
};
</script>

<style lang="scss" src="../css/detail-style.scss"></style>