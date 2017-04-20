<template>
<section class="bookmark-section">
    <header class="book-header">
        <h1>나의 북마크</h1>
        <h3>내가 보고 싶은 공연전시</h3>
    </header>
    <!--<div>
        <p class="bookmark-info__name">공연이름</p>
        <p class="bookmark-info__date">공연날짜</p>
        <p class="bookmark-info__area">공연지역</p>
        <button type="button" class="bookmark-info__delete"></button>
    </div>-->
    <div class="row bookmark-info" >
        <div class="card-menu col-xl-6 col-lg-6 push-3">
            <div class="card-content">
                <div class="card-title bookmark-info__name">2017 아침을 여는 클래식 10월 - 투 첼로스</div>
                <ul class="card-list">
                    <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-map-marker"></span>대전</li>
                    <li class="card-list-item"><span class="card-icon bookmark-info__date pe-7s-date"></span>2017-10-10</li>
                </ul>
                <button type="button" class="bookmark-info__delete"><span class="pe-7s-close"></span></button>
            </div>
        </div>
    </div>
<!-- erase from this part -->
    <div class="row bookmark-info" >
        <div class="card-menu col-xl-6 col-lg-6 push-3">
            <div class="card-content">
                <div class="card-title bookmark-info__name">2017 아침을 여는 클래식 10월 - 투 첼로스</div>
                <ul class="card-list">
                    <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-map-marker"></span>대전</li>
                    <li class="card-list-item"><span class="card-icon bookmark-info__date pe-7s-date"></span>2017-10-10</li>
                </ul>
                <div class="bookmark-info__delete">
                    <button type="button"><span class="pe-7s-close"></span></button>
                </div>
            </div>
        </div>
    </div>

    <!-- erase from this part -->
    <div class="row bookmark-info" >
        <div class="card-menu col-xl-6 col-lg-6 push-3">
            <div class="card-content">
                <div class="card-title bookmark-info__name">2017 아침을 여는 클래식 10월 - 투 첼로스</div>
                <ul class="card-list">
                    <li class="card-list-item"><span class="card-icon bookmark-info__area pe-7s-map-marker"></span>대전</li>
                    <li class="card-list-item"><span class="card-icon bookmark-info__date pe-7s-date"></span>2017-10-10</li>
                </ul>
                <div class="bookmark-info__delete">
                    <button type="button"><span class="pe-7s-close"></span></button>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

