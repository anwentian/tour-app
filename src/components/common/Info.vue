<template>
  <div name='info' class="info">
    <div class="gallery">
      <div class= "pic">
        <img :src="product.img" />
      </div>
      <div class="summary">
        <span v-if="product.from">{{product.type}} | {{product.from}}</span>
        <span class="product-number">产品编号：0000000000000</span>
      </div>
    </div>
    <div class="introduction section">
      <h2>{{product.descrip}}</h2>
      <p class="lowest-price"><span>{{product.price|currency}}</span>起</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    props: {
      product: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .info {
    background: #fff;
  }
  .introduction h2{
    margin-bottom: .375rem;
    font-size: 16px;
    color: #333;
    font-weight:700;
  }
.gallery {
    position: relative;
    padding-top: 1.5rem;
  }
  .pic {
    height: 6rem;
  }
  .pic img {
    width: 100%;
    height: 100%;
  }
  .summary {
    position: absolute;
    padding: .375rem;
    bottom: 0;
    font-size: 12px;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
  }
  .summary span:last-child {
    float: right;
  }
  .lowest-price {
    color: #888;
    font-size: 12px;
    
  }
  .lowest-price span {
    color: #c5129a;
    font-size: 16px;
    font-weight: 700;
  }
  .product-number {
    background: rgba(0, 0, 0, 0.5);
    padding-left: .375rem;
    padding-right: .375rem;
    line-height: 1.5;
  }
  
</style>