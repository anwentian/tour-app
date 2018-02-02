<template>
    <div name="classify" class="classify">
      <router-link tag="div" :to="'/productions/'+index" :key="index" v-for="(item,index) in classify" @click.native="changClassify({classify:item.type})">
        <div class="class-img">
          <img :src="item.img"/>
        </div>
        <span>{{item.text}}</span>     
      </router-link>
    </div>
    
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Classify',
  data () {
    return {
      classify: [
        {
          'type': 'outboard',
          'text': '出境游',
          'img': require('../assets/images/outboard.png')
        },
        {
          'type': 'domestic',
          'text': '国内游',
          'img': require('../assets/images/tree.png')
        },
        {
          'type': 'around',
          'text': '周边游',
          'img': require('../assets/images/bike.png')
        },
        {
          'type': 'visa',
          'text': '签证',
          'img': require('../assets/images/visa.png')
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['changClassify'])
  },
  created () {
    // console.log(this.classify[2].type)
  }
}
</script>
<style>
  .classify {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background: #fff;
  }
  .classify>div {
    display: inline-block;
    width: 25%;
    text-align: center;
    font-size: 13px;
  }
  .class-img {
    width: 100%;
    height: 1.5rem;
    padding-top: .125rem;
    padding-bottom: .125rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .class-img img {
    width:1.83rem;
  }


</style>