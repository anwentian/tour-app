<template>
  <div class="products-sort"> 
    <div class="sort-content">
      <ul>
        <li v-for="(item,index) in list" :class="{selected:index===cur}" @click = "changeCur($event,index)">
          <div>{{item}}</div>
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data () {
    return {
      cur: 0,
      list: ['推荐排序', '价格从高到低', '价格从低到高']
    }
  },
  methods: {
    changeCur (event, index) {
      // let type = 'default'
      this.cur = index
      // remove colse class and hide sort
      this.$store.state.sort[0].show = false
      this.$store.state.visaSort[0].show = false
      this.$store.state.showSort = false
      this.$store.state.showVisaSort = false
      this.$emit('getText', event.target.textContent)
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
.selected {
  background: url('../../assets/images/check.png') right center no-repeat;
  background-size: 6%;
  color: #c6129b;
}

.products-sort ul {
  background: #fff; 
  padding-left: .625rem;
  padding-right: .625rem;
}
.products-sort li {
  border-bottom: 1px solid #ddd;
  line-height: 1rem;
}

</style>
