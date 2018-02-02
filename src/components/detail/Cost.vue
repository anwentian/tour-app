<template>
  <div name="cost">
    <div>
      <h3>费用包含</h3>
      <ol>
        <li v-for="(include,index) in cost.include" :key="index">{{include}}</li>
      </ol>
    </div>
    <div>
      <h3>费用不包含</h3>
      <ol>
        <li v-for="(except,index) in cost.except" :key="index">{{except}}</li>
      </ol>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'Cost',
    props: {
      cost: {
        type: Object
      }
    }
  }
</script>

<style scoped>
</style>