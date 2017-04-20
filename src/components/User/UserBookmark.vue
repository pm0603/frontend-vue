<template>
<section class="bookmark-section">
    <header class="bookmark-header">
        <h1>나의 북마크</h1>
        <h3>내가 보고 싶은 공연전시</h3>
    </header>
    <div v-if="isView" class="bookmark-card-view">
        <div class="bookmark-total">북마크 <span>{{count}}</span></div>
        <div class="row bookmark-info" >
            <div class="card-menu col-xl-3 col-lg-3 col-md-12 col-sm-12" v-for="item in list">
                <div class="card-content">
                    <div class="card-title bookmark-info__title">{{ item.title }}</div>
                    <ul class="card-list">
                        <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-map-marker"></span>{{ item.area }}</li>
                        <li class="card-list-item"><span class="card-icon bookmark-info__date pe-7s-date"></span>{{ item.start_date }} ~ {{ item.end_date }}</li>
                        <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-ticket"></span>{{ item.price }}</li>
                    </ul>
                    <button type="button" class="bookmark-info__delete" @click="deleteBookmark(item.content)"><span class="pe-7s-close"></span></button>
                </div>
            </div>
        </div>
        <div class="bookmark-footer" ><button type="button" class="bookmark-button" @click="viewMoreList">더보기</button></div>
    </div>
    <div v-else class="bookmark-list-view">
        <div v-for="item in list" class="bookmark-list-row">
            <span class="bookmark-info__name">{{item.title}}</span>
            <p class="bookmark-info__area">{{item.area}}</p>
            <p>{{item.start_date}} ~ {{item.end_date}}</p>
            <p>{{item.price}}</p>
        </div>
    </div>
    <!--로딩-->
    <div v-show="loading" class="row load">
      <i class="fa fa-ticket fa-4x loading" aria-hidden="true"></i>
    </div>
    <div class="alert-delete" v-if="alert">
        <span class="pe-7s-close">삭제되었습니다.</span>
    </div>
</section>
</template>

<script>
    export default{
        data(){
            return{
                list:[],
                loading: false, // 로딩을 위함
                cnt : 1,
                count : 0,
                isView : true,
                alert: false, // for Alert
                next: ''
            }
        },
        beforeCreate () {
            // 북마크리스트의 경우 헤더에 토큰값을 보내야된다는데...
            console.log('유저토큰:', localStorage.token);
            var _this = this;
            axios.get('http://api.pm0603.com/api/bookmark/list/', {
                headers: {'Authorization': 'Token '+localStorage.token},
            })
            .then(function(response){
                console.log('북마크리스트:', response);
                _this.count     = response.data.count;
                _this.next      = response.data.next;
                _this.loading   = false;
                _this.list      = response.data.results;
            });
        },
        updated () {
          console.log('업데이트');

        },
        methods: {
            // Method | list bookmark 
            viewListBookmark(){
                this.loading = true;
                var _this = this;
                axios.get('/api/bookmark/list',
                {
                    headers: {'Authorization': 'Token '+localStorage.token},
                })
                .then(function(response){
                    
                    _this.count     = response.data.count;
                    _this.next      = response.data.next;
                    _this.loading   = false;
                    _this.list      = response.data.results;
                });
            },
            viewMoreList(){
            
                if(!this.next){
                    console.log('this.next:', this.next);
                    var _this = this;
                    // axios.get('/api/bookmark/list/?page='+this.cnt,
                    axios.get(this.next,
                        {
                            headers: {'Authorization': 'Token '+localStorage.token},
                        })
                        .then(function(response){

                            _this.loading = false;
                            let moreData = response.data.results;
                            for(var i=0; i<moreData.length; i++){
                                _this.list.push(_this.list[i]);
                            }
                        });

                } else {
                    // 더없음을 표시해줄것
                }

            },
            // Method | delete bookmark
            deleteBookmark(key){

                let bookmarkData = new FormData();
                bookmarkData.append('content', key );
                var _this = this;

                axios.post('/api/bookmark/delete',bookmarkData,
                {
                    headers: {'Authorization': 'Token '+localStorage.token},
                })
                .then(function(response){
                    // 삭제 되면 다시 뷰를 보여주기
                    _this.viewListBookmark();
                });
                
            }

        }
    }
</script>

