<template>
  <div class="theme">
    <subtitle :subtitle="'主题玩法'"></subtitle>
    <div class="content">
      <div class="left">
        <router-link tag="div" :to="{path:'/products_lists',query:{type:classify,theme:encodeURI(themes[a-1].title)}}" v-for="a in 3" :key="a" class="theme-item">
            <img :src="themes[a-1].img"/>
            <div>
            <h3>{{themes[a-1].title}}</h3>
            <p>{{themes[a-1].descrip}}</p>
            </div>
        </router-link>
      </div>
      <div class="right">
        <router-link tag="div" :to="{path:'/products_lists',query:{type:classify,theme:encodeURI(themes[a+2].title)}}" v-for="a in 3" :key="a" class="theme-item">
            <img :src="themes[a+2].img"/>
            <div>
            <h3>{{themes[a+2].title}}</h3>
            <p>{{themes[a+2].descrip}}</p>
            </div>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
import Subtitle from './Subtitle'
export default {
  name: 'Theme',
  props: {
    themes: {
      type: Array
    },
    classify: {
      type: String
    }
  },
  components: {
    'subtitle': Subtitle
  },
  created () {
    console.log(this.classify)
  }
}
</script>

<style>
.theme {
    background: #fff;
    margin-top:0.125rem;
    padding: .375rem;
}
.content {
  display: flex;
  margin-top: .25rem;
}
.right,.left {
    flex: 1;
}
.theme-item {
  display: flex;
  margin-bottom: .75rem;
}
.theme-item div {
  margin-left: .375rem;
  padding-top: 0.125rem;
}
.theme img {
  width: 1.5rem;
  height: 1.125rem;
}
.theme h3 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom:0.125rem;
}
.theme p{
  color:#888;
}
</style>
