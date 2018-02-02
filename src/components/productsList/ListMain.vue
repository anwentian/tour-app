<template>
  <div class="list-main">   
    <ul class="products-ul">
      <router-link tag="li" :to="'/detail/'+product.productId" v-for="(product,index) in list" :key="index" >
        <div class="product-img">
          <img :src="product.img"/>
          <span>{{product.from}}</span>
        </div>
        <div class="product-text">
          <div class="descrip">
            <p>{{product.descrip}}</p>
          </div>
          <div class="descrip-bottom">
            <span class="price">{{product.price|currency}}</span><span> 起</span>
            <span class="departure-time">{{product.date}}发团</span>           
          </div>     
          <p class="p-type">{{product.type}}</p>    
        </div>
      </router-link>
    </ul>   
  </div>
</template>

<script>
export default {
  name: 'ListMain',
  props: {
    list: {
      type: Array
    }
  },
  components: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-main {
  padding-top: 2.5rem;
  padding-bottom: .5rem;
}
.products-ul li {
  display: flex;
  padding-left: .625rem;
  padding-right: .625rem;
}
.product-img {
  width: 2.875rem;
  height: 2.375rem;
  margin-top: .5rem;
  overflow: hidden;
  position: relative;
}
.product-img img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.product-img span {
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 4px;
  padding-right:4px;
  font-size: 12px;
  color: #fff;
  background: rgba(0,0,0,0.5);
}
.product-text {
    flex: 1;
    margin-top: .375rem;
    margin-left: .25rem
}
.descrip {
    width: 90%;
}
.descrip p {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    font-size: 14px;
   
}
.departure-time {
    color:#8c8c8c;
    font-size: 12px;
    float: right;
}
.product-text span {
    font-size:12px;
    color:#8c8c8c;
    vertical:
}
.descrip-bottom {
    display: flex;
    align-items: baseline;
}
span.price {
    font-size: 14px;
    font-weight: 600;
    color: #c5129a;
}
.departure-time {
    flex: 1;
    text-align: right;
}
.p-type {
    border: 1px solid #c5129a;
    color: #c5129a;
    font-size: 12px;
    display: inline-block;
    padding: .0625rem .125rem;
    margin-top: .125rem;
    border-radius: 4px;
}
</style>
