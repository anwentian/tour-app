<template>
  <div id="app">
      <tab v-show="$store.state.isShow"></tab>      
      <router-view v-if="tour.home" :tour="tour"></router-view>       
  </div>
</template>

<script>
import Tab from '@/components/Tab'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      tour: {}
    }
  },
  computed: {
    outboardProducts () {
      return this.tour.outboard.products
    },
    domesticProducts () {
      return this.tour.domestic.products
    },
    aroundProducts () {
      return this.tour.around.products
    },
    allProducts () {
      return this.outboardProducts.concat(this.domesticProducts, this.aroundProducts)
    }
  },
  components: {
    'tab': Tab
  },
  created () {
    let _this = this
    this.hideTab(this.$route.path)
    this.$http.get('static/data.json').then(function (res) {
      _this.tour = res.data
      console.log(_this.tour)
      _this.getAllProducts(_this.allProducts)
    }).catch(function (err) {
      console.log(err)
    })
  },
  watch: {
    $route (to) {
      this.hideTab(to.path)
    }
  },
  methods: {
    ...mapActions(['show', 'hidden', 'getAllProducts']),
    hideTab (path) {
      let pattern = /^home$|^dest$|^user$/
      path = path.substring(1)
      if (pattern.test(path)) {
        this.show()
      } else {
        this.hidden()
      }
    }
  }
}
</script>

<style>
@import './assets/css/global.css'

</style>
