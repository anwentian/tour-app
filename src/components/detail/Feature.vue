<template>
  <div name="feature" class="feature">
    <h2>产品特色：</h2>
    <pre>
     {{feature.pre}}
    </pre>
    <div v-if="feature.tips">
    <h2>主要提示：</h2>
    <ol> 
      <li v-for="(tip,index) in feature.tips" :key="index">{{tip}}</li>
    </ol>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'Feature',
    props: {
      feature: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .feature h2{
    margin-bottom: .375rem;
    font-size: 16px;
    color: #333;
    font-weight:700;
  }
pre {
  margin: .25rem 0;
  font-size: 12px;
  color: #666;
  line-height: 1.8;
  white-space: pre-line;
}
</style>