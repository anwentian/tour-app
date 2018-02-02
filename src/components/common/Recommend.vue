<template>
  <div class="recommend">
    <subtitle :subtitle="'推荐线路'"></subtitle>
    <board-box :tourList="recommends"></board-box>
    <router-link :to="{path:'/products_lists',query:{type:targetType}}" >
      <more></more>
    </router-link>
  </div>
  
</template>

<script>
import Subtitle from './Subtitle'
import More from './More'
import BoardBox from './BoardBox'
export default {
  name: 'Recommend',
  components: {
    'subtitle': Subtitle,
    'board-box': BoardBox,
    'more': More
  },
  props: {
    recommends: {
      type: Array
    },
    targetType: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend {
    background: #fff;
    margin-top: 0.125rem;
    padding:.375rem;
}
</style>
