<template>
    <div class="container">
        <detail-header></detail-header>
        <detail-info></detail-info>
        <detail-description></detail-description>
        <detail-review></detail-review>
        <!-- <detail-tap></detail-tap> -->
    </div>
</template>

<script>
import DetailHeader      from './DetailHeader.vue';
import DetailInfo        from './DetailInfo.vue';
import DetailDescription from './DetailDescription.vue';
import DetailReview      from './DetailReview.vue';
// import DetailTap         from './DetailTap.vue';

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
          // DetailTap         : DetailTap
        }
    }

</script>
