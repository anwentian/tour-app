<template>
  <div class="home" v-if="tour&&tour.home.selections">
    <swiper :images="tour.home.swiper"></swiper>
    <classify></classify>
    <selection :selects="tour.home.selections"></selection>
    <div class="board">
      <p v-for="(a,index) in type" :class="{selected:(current==index)}" @click="changeSelected(index)">
        {{tour[a].name}}
      </p>
    </div>
    <board-box :tourList="tour[targetType].recommend"></board-box>
    <router-link :to="{path:'/products_lists',query:{type:targetType}}">
      <more @click.native="changType({type:targetType})"></more>
    </router-link>
  </div>
  
</template>

<script>
import { mapMutations } from 'vuex'
import Swiper from '@/components/common/Swiper'
import Classify from '@/components/Classify'
import Selection from '@/components/common/Selection'
import BoardBox from '@/components/common/BoardBox'
import More from '@/components/common/More'
export default {
  name: 'Home',
  props: {
    tour: {
      type: Object
    }
  },
  components: {
    'swiper': Swiper,
    'classify': Classify,
    'selection': Selection,
    'board-box': BoardBox,
    'more': More
  },
  data () {
    return {
      current: 0,
      type: ['outboard', 'domestic', 'around'],
      images: ['static/img/home/banner1.jpg', 'static/img/home/banner2.jpg', 'static/img/home/banner3.jpg']
    }
  },
  computed: {
    targetType () {
      return this.type[this.current]
    }
  },
  methods: {
    changeSelected (index) {
      this.current = index
    },
    ...mapMutations(['changType'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
   background: #f0f0f0;
   margin-bottom: 2rem;
}
.selected {
  color:#c6129b;
}
.board {
  background: #fff;
  width: 100%;
  display: flex;
  margin-top: .125rem;
  padding-top: .625rem;
  padding-bottom: .625rem;
}
.board p {
  flex: 1;
  text-align: center;
  font-size: 15px;
}
</style>
