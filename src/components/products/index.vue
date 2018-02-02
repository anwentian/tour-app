<template>
  <div class="products">
    <v-header :title="targetDate.name"></v-header>
    <visa v-if="name ==='visa'" :visaData="targetDate"></visa>
    <div v-if="name!=='visa'">
      <swiper :images="targetDate.swiper" class="margin-t"></swiper>
      <selection :selects="targetDate.selections"></selection>
      <theme v-if='targetDate.themeLink' :classify="name" :themes="targetDate.themeLink"></theme>
      <recommend v-if="targetDate.recommend" :recommends="targetDate.recommend" :targetType="name"></recommend>
    </div>
    <div class="loading" v-if="loading">正在加载数据。。。</div>
  </div>
  
</template>

<script>
import Header from '@/components/Header'
import Selection from '@/components/common/Selection'
import Theme from '@/components/common/Theme'
import Recommend from '@/components/common/Recommend'
import Visa from '@/components/visa'
import Swiper from '@/components/common/Swiper'
export default {
  name: 'Products',
  components: {
    'v-header': Header,
    'swiper': Swiper,
    'selection': Selection,
    'theme': Theme,
    'recommend': Recommend,
    'visa': Visa
  },
  props: {
    tour: {
      type: Object
    }
  },
  data () {
    return {
      loading: false,
      nameList: ['outboard', 'domestic', 'around', 'visa'],
      name: 'outboard'
    }
  },
  computed: {
    targetDate () {
      return this.tour[this.name]
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.loading = true
      this.name = this.nameList[this.$route.params.id]
      this.loading = false
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
.products {
  background: #f0f0f0;
}
#banner.margin-t {
  margin-top: 1.5rem;
}
.loading {
  width: 200px;
  height: 200px;
  background: rbga(0,0,0,.6);
  position: absolute;
  top: 100px;
  left:100px;
}
</style>
