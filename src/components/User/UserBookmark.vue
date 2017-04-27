<template>
<section class="bookmark-section" id="gotocontent">
    <header class="bookmark-header">
        <h1>나의 북마크</h1>
        <h3>내가 보고 싶은 공연전시</h3>
    </header>
    <div v-if="isView" class="bookmark-card-view">
        <div class="bookmark-total">북마크 <span>{{count}}</span></div>
        <div class="row bookmark-info" >
            <div class="card-menu col-xl-3 col-lg-3 col-md-12 col-sm-12" v-for="item in list" >
                <router-link :to="'/detail/' + item.seq" tag="a" active-class="current-page">
                    <div class="card-content">
                        <div class="card-title bookmark-info__title">{{ item.title }}</div>
                        <ul class="card-list">
                            <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-map-marker"></span>{{ item.area }}</li>
                            <li class="card-list-item"><span class="card-icon bookmark-info__date pe-7s-date"></span>{{ item.start_date }} ~ {{ item.end_date }}</li>
                            <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-ticket"></span>{{ item.price }}</li>
                        </ul>
                        <button type="button" class="bookmark-info__delete" @click.prevent="deleteBookmark(item.content)"><span class="pe-7s-close"></span></button>
                    </div>
                </router-link>
            </div>
        </div>
        <!--로딩-->
        <div v-if="loading" class="row load">
            <i class="fa fa-ticket fa-4x loading" aria-hidden="true"></i>
        </div>
        <div class="bookmark-footer" ><button type="button" class="bookmark-button" @click="viewMoreList" v-if="btnMore">더보기</button></div>
    </div>
    <div v-else class="bookmark-list-view">
        <div v-for="item in list" class="bookmark-list-row">
            <span class="bookmark-info__name">{{item.title}}</span>
            <p class="bookmark-info__area">{{item.area}}</p>
            <p>{{item.start_date}} ~ {{item.end_date}}</p>
            <p>{{item.price}}</p>
        </div>
    </div>

</section>
</template>

<script>
    export default{
        data(){
            return{
                list:[],
                loading: true,
                cnt : 1,
                count : 0,
                isView : true,
                alert: false,
                next: '',
                btnMore : true
            }
        },
        beforeCreate () {
            var _this = this;
            this.loading   = true;
            axios.get('http://api.pm0603.com/api/bookmark/list/', {
                headers: {'Authorization': 'Token '+localStorage.token},
            })
            .then(function(response){
                _this.count     = response.data.count;
                _this.loading   = false;
                _this.list      = response.data.results;

                if( !response.data.next ){
                    _this.btnMore   = false;
                } else {
                    _this.next      = response.data.next;
                }
            });
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
                    _this.loading   = false;
                    _this.list      = response.data.results;


                    if( !response.data.next ){

                        _this.btnMore  = false;

                    }else{
                        _this.next = response.data.next;
                    }

                });

            },

            viewMoreList(){

                if( this.next ){

                    var _this = this;
                    axios.get( this.next,
                        {
                            headers: {'Authorization': 'Token '+localStorage.token},
                        })
                        .then(function(response){

                            _this.next    = response.data.next;
                            _this.btnMore = _this.next == null ? false : true;

                            let moreData = response.data.results;
                            for(var i=0; i<moreData.length; i++){
                                _this.list.push(_this.list[i]);
                            }

                            _this.loading = false;

                        });

                } else {
                    this.btnMore = false;
                }

            },
            // Method | delete bookmark
            deleteBookmark(key){
                this.loading = true;

                let bookmarkData = new FormData();
                bookmarkData.append('content', key );

                var _this = this;

                axios.post('/api/bookmark/delete',bookmarkData,
                {
                    headers: {'Authorization': 'Token '+localStorage.token},
                })
                .then(function(response){

                    _this.viewListBookmark();

                });

            }

        }
    }
</script>
