<template>
  <div class="board-box">
    <ul class="products-list">
      <router-link tag="li" :to="'/detail/'+item.productId" v-for="(item,index) in tourList" :key="index">
        <div class="item-box">
          <img :src="item.img"/>
          <span class="type">{{item.type}}</span>
          <p class="price">{{item.price|currency}}起</p>
        </div>
        <div class="item-discribe">
          <p class="name">{{item.descrip}}</p>
          <p class="remark">{{item.remark}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoardBox',
  props: {
    tourList: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board-box {
    background: #fff;
    padding-bottom: .125rem;
}
.products-list {
    padding: 0 .25rem;
    font-size:0;
}
.products-list li {
    overflow: hidden;
    border: 1px solid #eee;
    border-radius: .156rem;
    box-shadow: 0 2px 2px #eee;
    margin-bottom: .25rem;
}
.item-box {
    position: relative;
}
.item-box img {
    width: 100%;
    height: 5.25rem;
}
.type,.price {
    position: absolute;  
    left:.313rem;
    padding:.188rem;
    font-size:12px;
    color:#fff; 
}
.type {
    top: .25rem;
    background: rgba(0,0,0,0.5);
    border-radius: .25rem;
}
.price {
    bottom:.25rem;
    background:#fb454b;
    border-radius: 4px;
}
.item-discribe {
    padding:.25rem;
}
.name,.remark{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.5;
}
.name {
    font-size:14px;  
}
.remark {
    color:#888;
}

</style>
