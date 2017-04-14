<template>
  <section class="genre-list">
    <div class="wrapper">
      <h2>Our Collections</h2>
      <div class="row" >
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12" v-for="index in items" >
          <div class="card-side">
              <div class="card-image-wide">
                  <figure class="card-image-medium">
                      <img src="http://cdn.londonandpartners.com/asset/matilda-the-musical-at-the-cambridge-theatre_image-manuel-harlan_bba489aae2b460a47ac89c2577bb58ca.jpg">
                   </figure>

                  <figure class="card-image-small">
                      <img src="http://az616578.vo.msecnd.net/files/2016/01/29/635897072559401292159767761_musical.jpg">
                      <img src="http://blog.mailtravel.co.uk/wp-content/uploads/2012/11/chicago.jpeg">
                   </figure>
              </div>
              <div class="card-content-wide">
                  <p class="card-title">Theatre</p>
                  <p class="card-about">All the World's a stage, and London has the spotlight. With all dates and all prices available on every show, check out the best in theatre that the city has to offer</p>
                   <div class="card-footer">
                       <!--<button type="button">button</button>-->
                   </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  var dbMoodel = [
                      'image',
                      'image',
                      'image',
                      'image',
                      'image',
                      'image'
                  ];
  export default{
      data(){
          return{
              items : dbMoodel
          }
      }
  }
</script>