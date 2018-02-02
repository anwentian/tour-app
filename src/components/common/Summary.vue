<template>
  <div name='summary' class="summary">
    <div class="gallery">
      <div class= "pic">
        <img :src="product.img" />
      </div>
      <div class="info">
        <span v-if="product.type">{{product.type}}</span>
        <span>产品编号：{{product.number}}</span>
      </div>
    </div>
    <div class="introduction section">
      <h2>product.descript</h2>
      <p class="lowest-price"><span>{{product.price|currency}}</span>起</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Summary',
    props: {
      product: {
        type: Object
      }  
    }
  }
</script>

<style scoped>
  .summary {
    background: #fff;
  }
  .introduction h2{
    margin-bottom: .375rem;
    font-size: 16px;
    color: #333;
    font-weight:400;
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
  .info {
    position: absolute;
    padding: .375rem;
    bottom: 0;
    font-size: 12px;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
  }
  .info span:last-child {
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
  
</style>