<template>
  <div  class="container">   
    <dests-list :dests="dests" @getCurrent="changShow"></dests-list>
    <div class="places" v-for="(destItem,index) in dests" :key="index" v-show="cur===index">
      <hot-dest :hot="dests[index].hotdest"></hot-dest>
      <div  v-for="(area,index) in dests[index].areaList" :key="index">
        <area-list :area="area" class="area-box"></area-list>
      </div>
      <div style="height:2rem;"></div>      
    </div>   
  </div>
</template>

<script>
import HotDest from './HotDest'
import DestsList from '@/components/common/DestsList'
import AreaList from './AreaList'
export default {
  name: 'Dest',
  components: {
    'hot-dest': HotDest,
    'dests-list': DestsList,
    'area-list': AreaList
  },
  data () {
    return {
      dests: [],
      cur: 0
    }
  },
  methods: {
    changShow (current) {
      this.cur = current
    }
  },
  created () {
    let _this = this
    this.$http.get('static/destList.json').then(function (res) {
      _this.dests = res.data
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height:100%;
}
body {
  height:100%;
}
body > div {
  height:100%;
  
}
.container {
  height: 100%;
  overflow:hidden;
  box-sizing: border-box;
  display: flex;
  background:#f9f9f9;
  
}
.places::-webkit-scrollbar {
    width: 0px;
}
.places {
  flex:1;  
  padding-left:0.188rem;
  padding-top: .375rem;
  background: #fff;
  height:100%;
  overflow: scroll;

}

</style>
