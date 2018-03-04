<template>
  <div name="Book" class="book-bar">
      <div v-if="!collected" class="box" @click="collect">收藏</div>
      <div v-if="collected" class="box collected">已收藏</div>
      <div class="box booking">预定</div>
    </div>

</template>

<script>
  export default {
    name: 'Book',
    props: {
      item: {
        type: Object
      }
    },
    data () {
      return {
        isCollected: false
      }
    },
    computed: {
      collected () {
        let list = JSON.parse(window.localStorage.collectList)
        return list.find(p => p.id === this.item.productId) || this.isCollected
      }
    },
    methods: {
      collect () {
        this.isCollected = true
        console.log(this.collected)
        let id = this.item.productId
        this.$store.commit('collectProduct', { id })
        setTimeout(function () {
          console.log(JSON.parse(window.localStorage.collectList))
        }, 200)
      }
    }
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
.box {
  flex:1;
}
.collected {
  background:#ddd;
}
.booking {
    background: #c5129a;
    color: #fff;
}
</style>