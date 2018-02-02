<template>
  <div name="Book" class="book-bar">
      <div class="collect">收藏</div>
      <div class="booking">预定</div>
    </div>

</template>

<script>
  export default {
    name: 'Book'
  }
</script>

<style>
.book-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    text-align: center;
    border-top: 1px solid #efefef;
    background:#fff;
}
.book-bar div {
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.collect {
    flex:1;
}
.booking {
    flex:1;
    background: #c5129a;
    color: #fff;
}
</style>