<template>
  <div class="visaDest"> 
    <v-header title="签证"></v-header>
      <div class="dest-container">
      <dests-list :dests="dests" @getCurrent="changShow"></dests-list>
      <div class="places" v-for="(destItem,index) in dests" :key="index" v-show="cur===index">
        <place-list :places="destItem.countries"></place-list>
        <div class="blank"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import DestsList from '@/components/common/DestsList'
import PlaceList from './PlaceList'
export default {
  name: 'Dest',
  components: {
    'v-header': Header,
    'dests-list': DestsList,
    'place-list': PlaceList
  },
  props: {
    tour: {
      type: Object
    }
  },
  data () {
    return {
      cur: 0
    }
  },
  computed: {
    dests () {
      return this.tour.visa.dest
    }
  },
  methods: {
    changShow (current) {
      this.cur = current
    }
  },
  created () {
    document.getElementById('app').style.height = '100%'
  },
  destroyed () {
    document.getElementById('app').style = ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.visaDest {
  height: 100%;
  overflow:hidden;
  background:#f9f9f9; 
}
.dest-container {
  height: 100%;
  padding-top: 1.5rem;
  display: flex;
  box-sizing: border-box; 
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
.blank {
  width:100%;
  height:4px;
  position: relative;
  top: -2px;
  background: #fff;
}
</style>
