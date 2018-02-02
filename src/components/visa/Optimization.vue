<template>
  <div name="optimization" class="optimization">
    <subtitle class="normal" :subtitle="'品质优选'"></subtitle>
    <ul>
      <router-link tag="li" :to="'/visa/visadetail/'+item.visaId" v-for="(item,index) in selected" :key="index" class="countries-list">
        <div class="flag"><img :src="item.img"/></div>  
        <div class="text">
          <h5>{{item.descrip}}</h5>
          <p class="firstP">{{item.validity}}</p>
          <p class="times">{{item.times}}</p>
        </div>
      </router-link>  
    </ul>
    <router-link to="/visa/visadest">
      <more></more>
    </router-link>
  </div>
</template>

<script>
import Subtitle from '@/components/common/Subtitle'
import More from '@/components/common/More'
export default {
  name: 'Optimization',
  props: {
    selected: {
      type: Array
    }
  },
  components: {
    'subtitle': Subtitle,
    'more': More
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.normal h2{
  font-weight: 400;
}
.optimization {
    background: #fff;
    padding: .5rem .375rem;
    margin-top: .125rem;
}
.countries-list {
    display: flex;
    margin-bottom: .625rem;
    
}
.flag {
  width:3rem;
  height: 2.375rem;
}
.flag img {
    width: 100%;
    height: 100%;
}
.text {
    flex: 1;
    margin-left: .5rem;
    over-flow: hidden;
    
}
.text h5 {
    font-weight: normal;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    margin-bottom: .3125rem;
}
.text p {
    color: #8c8c8c;
    padding-left: .625rem;
    line-height:2;
}
.firstP {
    background: url('../../assets/images/visa-icon.png') left no-repeat;
    background-size: .375rem;
}
.times {
    background: url('../../assets/images/visa-clock.png') left no-repeat;
    background-size: .375rem;
}
</style>
