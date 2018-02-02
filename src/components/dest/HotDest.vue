<template>
  <div name="dest" >
    <subtitle :subtitle="'热门目的地'"></subtitle>
    <div v-for="item in hot" class="item">
      <router-link :to="{path:'/products_lists',query:{dest:encodeURI(item.dest)}}">
        <img class="item-img" :src="item.img"/>
        <div class="mask">
          <div>{{item.dest}}</div>
        </div>
      </router-link>    
    </div>
  </div>
</template>

<script>
import Subtitle from '@/components/common/Subtitle'
export default {
  name: 'Dest',
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
.item {
  display: inline-block;
  position: relative;
  width: 3.375rem;
  height: 2.438rem;
  border-radius:5px;
  overflow: hidden;
  margin-left:0.25rem;
  margin-bottom:0.25rem;
}
.item a {
  display: block;
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
  color:#fff;
}


</style>
