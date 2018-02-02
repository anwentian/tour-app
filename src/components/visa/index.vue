<template>
  <div class="visa">
    <div class="step-img">
      <img src="../../assets/images/fourtips.png">
    </div>
    <visa-hot :hot="visaData.hot"></visa-hot>  
    <optimization :selected="visaData.selected"></optimization>
  </div>
  
</template>

<script>
import VisaHot from './VisaHot'
import Optimization from './Optimization'
export default {
  name: 'Visa',
  components: {
    'visa-hot': VisaHot,
    'optimization': Optimization
  },
  props: {
    visaData: {
      type: Object
    }
  }
}
</script>

<style>
.visa {
  margin-top: 1.5rem;
}
.step-img {
    padding: .75rem .25rem;
    background: #fff;
}
.step-img img {
    width: 100%;
}

</style>
