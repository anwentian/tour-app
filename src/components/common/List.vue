<template>
  <div name="List" class="list">
      <h3>{{content.head}}</h3>
      <ol>
        <li v-for="(list,index) in content.msg">
          {{list}}
        </li>
      </ol>
    </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      content: {
        type: Object
      }
    }
  }
</script>

<style>
  .list ol {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: .25rem;
  }
  .list ol li {
    margin-bottom: .125rem;
  }
  .list h3{
    margin-top: .375rem;
    margin-bottom: .25rem;
    color: #333;
    font-size: 14px;
    font-weight:700;
  }
</style>