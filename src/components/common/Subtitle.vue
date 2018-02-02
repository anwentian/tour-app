<template>
  <div class= "subtitle">
   <h2>{{subtitle}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
    subtitle: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtitle {
  margin:.188rem auto .5rem;
  text-align: center;
  
}
.subtitle h2 {
  color:#333; 
  display: inline-block;
  border-box: box-sizing;
  padding-left:.563rem;
  padding-right: .563rem;
  background:url('../../assets/images/dot.png') 0 no-repeat,url('../../assets/images/dot.png') 100% no-repeat;
  background-size: 0.25rem;
  font-weight: 700;
  font-size: 16px;
}
</style>
