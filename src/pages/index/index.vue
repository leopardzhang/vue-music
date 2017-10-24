<template lang="html">
  <section id="index">
    <div class="banner" v-if="swiper.length">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swiper" :data-id="item.id">
            <a href="javascript:" :data-href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for="item in discList" class="item">
          <div class="icon">
            <img width="60" height="60" v-lazy="item.imgurl">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getIndexData, getDiscList } from 'api/index'
import { ERR_OK } from 'api/config'
import Swiper from 'swiper'

export default {
  data () {
    return {
      swiper: [],
      discList: []
    }
  },
  created () {
    this._getIndexData();
    this._getDiscList();
  },
  methods: {
    _getIndexData () {
      getIndexData().then((res) => {
        if(res.code == ERR_OK) {
          this.swiper = res.data.slider;
          this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: false,
                loop: true,
                touchRatio : 0.9,
                spaceBetween: 10,
                autoplay: 5000,
                observer:true,
                observeParents:true
            });
          });
        } else {
          console.log('获取数据失败');
        }
      });
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    }
  }
}
</script>

<style scoped lang="css">
  @import "~assets/swiper.min.css";
</style>

<style scoped lang="stylus">
@import "~common/stylus/variable"

  .swiper-wrapper
    img
      width: 100%
  .recommend-list
    .list-title
      height: 65px
      line-height: 65px
      text-align: center
      font-size: $font-size-medium
      color: $color-theme
    .item
      display: flex
      box-sizing: border-box
      align-items: center
      padding: 0 20px 20px 20px
      .icon
        flex: 0 0 60px
        width: 60px
        padding-right: 20px
      .text
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        line-height: 20px
        overflow: hidden
        font-size: $font-size-medium
        .name
          margin-bottom: 10px
          color: $color-text
        .desc
          color: $color-text-d
  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
