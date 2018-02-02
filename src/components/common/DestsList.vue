<template>
  <div name="dests-list" class="dests-list">
    <ul>
      <li v-for="(dest,index) in dests" :class="{selected:(current==index)}"  @click="changeSelected(index)">
        {{dest.area}}
      </li>
    </ul>
  </div>
</template>

<script>
import Subtitle from '@/components/common/Subtitle'
export default {
  name: 'Dest',
  data () {
    return {
      current: 0
    }
  },
  methods: {
    changeSelected (index) {
      this.current = index
      this.$emit('getCurrent', this.current)
    }
  },
  components: {
    'subtitle': Subtitle
  },
  props: {
    dests: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.selected {
  color:#c6129b;
  background: #fff;
}
.dests-list {
  width:2.25rem;
  background: #f9f9f9;
  height: 100%;
}
.dests-list ul li:first-child {
  padding-top:.375rem;
}
.dests-list ul li {
  border-bottom: 1px solid #ececee;
  height:1.313rem;
  text-align: center;
  font-size: 14px;
  line-height:1.313rem;
}

</style>
