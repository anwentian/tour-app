<template>
  <div class="visa-box">
    <ul>
      <router-link tag="li" :to="'/visa/visadetail/'+item.visaId" v-for="(item,index) in visaList" :key="index" class="countries-list">     
        <h5>{{item.descrip}}</h5>
        <p class="first-p">{{item.validity}}</p>
        <div class="last-p">
          <p class="times">{{item.times}}</p>
          <p class="visa-price">{{item.price|currency}}</p>
        </div>       
      </router-link>
    </ul>      
  </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'VisaBox',
  props: {
    visaList: {
      type: Array
    }
  }
}
</script>

<style>
.visa-box {
  padding: 0 .375rem;
}
.countries-list {
  margin-bottom: .5rem;
}
.visa-box h5 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: .3125rem;
}
.visa-box p {
    color: #8c8c8c;
    padding-left: .625rem;
    line-height:2;
}
.first-p {
    background: url('../../assets/images/visa-icon.png') left no-repeat;
    background-size: .375rem;
}
.last-p {
    background: url('../../assets/images/visa-clock.png') left no-repeat;
    background-size: .375rem;
    display: flex;
}
.times {
  flex:1;
}
p.visa-price {
  color: #c5129a;
  font-size: 15px;
  font-weight: 700;
}
</style>
