<template>
<section class="bookmark-section">
    <header class="book-header">
        <h1>나의 북마크</h1>
        <h3>내가 보고 싶은 공연전시</h3>
    </header>
    <div class="row bookmark-info" v-for="item in list">
        <div class="card-menu col-xl-6 col-lg-6 push-3">
            <div class="card-content">
                <div class="card-title bookmark-info__name">{{ item.title }}</div>
                <ul class="card-list">
                    <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-cash"></span>{{ item.price }}</li>
                    <li class="card-list-item"><span class="card-icon bookmark-info__date pe-7s-date"></span>{{ item.start_date }} ~ {{ item.end_date }}</li>
                    <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-map-marker"></span>{{ item.area }}</li>
                </ul>
                <button type="button" class="bookmark-info__delete" @click="deleteBookmark(item.content)"><span class="pe-7s-close"></span></button>
            </div>
        </div>
    </div>
    <div class="bookmark-footer"><button type="button" class="bookmark-button" @click="viewMoreList">더보기</button></div>
</section>
</template>

<script>
    export default{
        data(){
            return{
                list:[],
                loading: false, // 로딩을 위함
            }
        },
        beforeCreate () {
            // 북마크리스트의 경우 헤더에 토큰값을 보내야된다는데...
            console.log('유저토큰:', localStorage.token);
            var _this = this;
            axios.get('/api/bookmark/list/', {
                headers: {'Authorization': 'Token '+localStorage.token},
            })
            .then(function(response){
                console.log('북마크리스트:', response.data.results);
                // 뷰 뿌리기
                _this.loading = false;
                _this.list = response.data.results;
            });
        },
        methods: {
            // Method | list bookmark 
            viewListBookmark(){
                this.loading = true;
                axios.get('/api/bookmark/list',
                {
                    headers: {'Authorization': 'Token '+localStorage.token},
                })
                .then(function(response){
                    _this.loading = false;
                    _this.list = response.data.results;
                });
            },
            viewMoreList(){
                
            },
            // Method | delete bookmark
            deleteBookmark(key){

                let bookmarkData = new FormData();
                bookmarkData.append('content', key );

                axios.post('/api/bookmark/delete',bookmarkData,
                {
                    headers: {'Authorization': 'Token '+localStorage.token},
                })
                .then(function(response){
                    // 삭제 되면 다시 뷰를 보여주기
                    console.log('삭제response:', response);
                     this.viewListBookmark();
                });
                
            }

        }
    }
</script>

