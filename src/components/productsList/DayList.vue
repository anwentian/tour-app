<template>
  <div class="products-sort"> 
    <div class="sort-content">
      <ul class="type">    
        <li v-for="(day,index) in diff+1" :key = "index"  :class="{color:hasClicked&&index===cur}">
          <div @click = "changeCur($event,index)">{{days.min+index}}天<span v-if="index===0">及以下</span><span v-if="index===diff">及以上</span></div>
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'DayList',
  props: {
    clicked: {
      type: Number,
      default: 0
    },
    days: {
      type: Object
    }
  },
  data () {
    return {
      cur: 0,
      hasClicked: false
    }
  },
  computed: {
    list () {
      return this.$store.state.sort[this.clicked].list
    },
    diff () {
      return this.days.max - this.days.min
    }
  },
  methods: {
    changeCur (event, index) {
      this.hasClicked = true
      this.cur = index
      this.$store.state.sort[this.clicked].show = false
      this.$store.state.showSort = false
      this.$emit('getTargetDate', event.target.textContent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products-sort {
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,.5);
   position: fixed;
   top: 2.5rem;  
   font-size: 12px;
}
.color {
  color: #c6129b;
}
.products-sort ul {
  background: #fff; 
  padding-left: .625rem;
  padding-right: .625rem;
}
.type li{
  display: inline-block;
  width: 25%;
  line-height: 1;
  border-bottom: 1px solid #dfdfdf;
  align-items: center;
  text-align:center;
  padding-top:.25rem;
  padding-bottom:.188rem;
}
.type div {
  width:100%;
  display:inline-block;
  border-right: 1px solid #dfdfdf;
  font-size: 12px;
}
.type li:nth-child(4n) div {
  border-right: none;
}
</style>
