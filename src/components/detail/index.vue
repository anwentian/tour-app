<template>
  <div class="detail">
    <v-header id = "head" :title="'产品详情'"></v-header>
    <info :product="product"></info>
    <available-dates :availableDates="product.availableDates" class="section"></available-dates>
    <div :class="{'padding-t' : paddingT}">
      <div id="detail-nav" class="section" :class="{fixed:fixed}">
        <a :class="{selected:cur===index}" v-for="(link,index) in navList" @click="anchor(index)">{{link}}</a>
      </div>
    </div>
    <div class="detail-text">
      <feature :feature="product.feature" id="section0" class="section"></feature>
      <schedule :schedule="product.schedule" id="section1"></schedule>
      <cost id="section2" class="section" :cost="product.cost"></cost>
      <div id="section3" :notice="product.notic">
        <terms v-if="terms" v-for="(terms,key,index) in product.notic" :key="key" :terms="terms"></terms>
      </div>
    </div>
  </div>
  
</template>

<script>
  import Header from '@/components/Header'
  import Info from '@/components/common/Info'
  import AvailableDates from './AvailableDates'
  import Feature from './Feature'
  import Schedule from './Schedule'
  import Cost from './Cost'
  import Terms from './Terms'
  export default {
    name: 'Detail',
    components: {
      'v-header': Header,
      'info': Info,
      'available-dates': AvailableDates,
      'feature': Feature,
      'schedule': Schedule,
      'cost': Cost,
      'terms': Terms
    },
    props: {
      tour: {
        type: Object
      }
    },
    data () {
      return {
        navList: ['产品特色', '日程安排', '费用说明', '预定须知'],
        cur: 0,
        fixed: false,
        on: true,
        product: {}
      }
    },
    computed: {
      paddingT () {
        return this.cur
      },
      targetList () {
        return this.$store.state.allProducts
      }
    },
    methods: {
      anchor (index) {
        this.cur = index
        this.on = this.cur
        this.fixed = this.cur
        const t = this.getEleOffsetTop('section' + index)
        const diff = this.getEleHeight('head') + this.getEleHeight('detail-nav')
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop = t - diff
        } else {
          document.body.scrollTop = t - diff
        }
        this.on = true
      },
      getEleHeight (id) {
        return document.getElementById(id).offsetHeight
      },
      getEleOffsetTop (id) {
        return document.getElementById(id).offsetTop
      },
      fetchDate (id) {
        this.product = this.targetList.find(product => { return product.productId === +id })
      }
    },
    created () {
      let id = this.$route.params.productId
      this.fetchDate(id)
      let _this = this
      this.$nextTick(function () {
        const t = _this.getEleOffsetTop('detail-nav') - 20
        const buff = 1
        const diff = Math.ceil(this.getEleHeight('head') + this.getEleHeight('detail-nav')) + buff
        const secTop = _this.getEleOffsetTop('section1') - diff
        const thdTop = _this.getEleOffsetTop('section2') - diff
        const fthTop = _this.getEleOffsetTop('section3') - diff
        let timer = null
        window.onscroll = function () {
          clearTimeout(timer)
          timer = setTimeout(function () {
            let scrollBarTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
            if (scrollBarTop >= t) {
              _this.fixed = _this.on && true
            } else {
              _this.fixed = false
            }
            if (scrollBarTop <= secTop) {
              _this.cur = 0
            } else if (secTop <= scrollBarTop && scrollBarTop <= thdTop) {
              _this.cur = 1
            } else if (thdTop <= scrollBarTop && scrollBarTop <= fthTop) {
              _this.cur = 2
            } else {
              _this.cur = 3
            }
          }, 100)
        }
      })
    },
    destroyed () {
      window.onscroll = null
    }
  }
</script>
<style>
  .padding-t {
    padding-top: 53px;
  }
  .detail {
    background: #f0f0f0;
  }
  #detail-nav .selected{
    color:#c5129a;
    border-bottom: 2px solid #c5129a;
  }

  #detail-nav {
    display: flex;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0;
    border-bottom: 1px solid #ededed;
  }
  .fixed {
    position: fixed;
    top: 1.5rem;
    left: 0;
    width: 100%;
  }
  #detail-nav a{
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  
</style>
