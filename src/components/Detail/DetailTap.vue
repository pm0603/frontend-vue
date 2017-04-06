<template>
     <section class="tap-section">
        <section class="tab-section">
          <div class="block">
            <div class="tab">
              <ul class="tab_list">
                <li><span onclick="Showtab('0')">공연날짜</span></li><li>
                  <span onclick="Showtab('1')">상세좌석</span></li>
              </ul>
            </div>
          </div>
          <div class="tab_contents">
            <div class="tab-item" id="tab_0" style="display: block; background-color: red;">
              <div class="tab_content">
                내용은 내용내용
              </div>
            </div>
            <div class="tab-item" id="tab_1" style="background-color: blue">
              <div class="tab_content">
                내용은 내용내용
              </div>
            </div>
          </div>
        </section>
      </section>
</template>