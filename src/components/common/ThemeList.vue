<template>
  <div class="products-sort"> 
    <div class="sort-content">
      <ul>
        <li v-for="(item,index) in themes" class="type" :class="{color:hasClicked&&index===cur, 'thre-col':threeCol}" @click = "changeCur($event,index)">
          <div>{{item}}</div>
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'ThemeList',
  props: {
    clicked: {
      type: Number,
      default: 0
    },
    themes: {
      type: Array
    },
    threeCol: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cur: 0,
      hasClicked: false
    }
  },
  computed: {
  },
  methods: {
    changeCur (event, index) {
      this.hasClicked = true
      this.cur = index
      this.$store.state.sort[this.clicked].show = false
      this.$store.state.visaSort[this.clicked].show = false
      this.$store.state.showSort = false
      this.$store.state.showVisaSort = false
      this.$emit('getType', event.target.textContent)
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
   font-size: 14px;
}
.color {
  color: #c6129b;
}
.products-sort ul {
  background: #fff; 
  padding-left: .625rem;
  padding-right: .625rem;
}
.type {
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
  font-size: 14px;
}
.type:nth-child(4n) div {
  border-right: none;
}

.thre-col {
  width: 33.333%
}
.type:nth-child(3n) div {
  border-right: none;
}
</style>
