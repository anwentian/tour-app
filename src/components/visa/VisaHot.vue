<template>
  <div name="visa-hot" class="hot" >
    <subtitle class="normal" :subtitle="'热门目的地'"></subtitle>
    <div>
    <router-link tag="div" :to="{path:'/visa/visaList',query:{country:encodeURI(item.dest)}}" v-for="(item,index) in hot" :key="index" class="hot-wrap">
      <div class="item">        
          <img class="item-img" :src="item.img"/>
          <div class="mask">
            <div>{{item.dest}}</div>
            <div class="en">{{item.en}}</div>
          </div>     
      </div>
      <div class="visa-price"><span>{{item.price|currency}}</span>&nbsp起</div>
    </router-link>
  </div>
  </div>
</template>

<script>
import Subtitle from '@/components/common/Subtitle'
export default {
  name: 'VisaHot',
  components: {
    'subtitle': Subtitle
  },
  props: {
    hot: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.normal h2{
  font-weight: 400;
}
.hot-wrap:nth-child(3n-1){
  margin-left: .5rem;
  margin-right: .5rem;
}
.hot-wrap {
  display: inline-block;
  margin-bottom:0.5rem;
}

.hot {
  background: #fff;
  text-align: center;
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-top: .125rem;
}
.item {
  display: inline-block;
  position: relative;
   width: 2.625rem;
  height: 2.625rem;
  border-radius:5px;
  overflow: hidden;
}

.item-img {
  width: 100%;
  height: 100%;
}
.mask {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color:#fff;
  font-size: 14px;
  line-height: 1.5;
}
.visa-price {
  font-size: 12px;
  text-align: center;
  color: #888;
}
.visa-price span {
  color: #c5129a;
  font-size:14px;
}
.en {
  font-size: 10px;
}

</style>
