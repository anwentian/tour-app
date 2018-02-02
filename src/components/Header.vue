<template>
  <div class="header">
    <a href="javascript:;" id="back" onclick="window.history.go(-1)">&lt</a>
    <div class="title">{{title}}</div>
  </div> 
</template>

<script>
export default {
  name: 'Header',
  props: {
    'title': {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  font-size: 16px;
  padding-top:0.25rem;
  padding-bottom:0.25rem;
  line-height: 1rem;
  background: #fff;
  box-shadow: 0px 1px 4px #ccc;
}
.title {
  text-align: center;
}
#back {
  display: inline-block;
  color: #888;
  padding:0 .375rem;
  position: absolute;
}

</style>
