<template>
    <div name="limit" class="section">
      <h3>{{terms.title}}</h3>
      <ol>
        <li v-for="(term,index) in terms.list">{{term}}</li>
      </ol>
    </div>  
</template>

<script>
  export default {
    name: 'Terms',
    props: {
      terms: {
        type: Object
      }
    }
  }
</script>

<style>
.section ol {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: .25rem;
  }
  h3{
    margin-bottom: .375rem;
    color: #333;
    font-size: 14px;
    font-weight:700;
  }
</style>