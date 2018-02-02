<template>
  <div name="area-list" class="area-list">
    <subtitle :subtitle="area.name"></subtitle>
    <place-list :places="area.city"></place-list>
    <div class="blank"></div>
  </div>
</template>

<script>
import Subtitle from '@/components/common/Subtitle'
import PlaceList from '@/components/common/PlaceList'
export default {
  name: 'AreaList',
  components: {
    'subtitle': Subtitle,
    'place-list': PlaceList
  },
  props: {
    area: {
      type: Object
    }
  }
}
</script>

<style scoped>
.area-list {
  width:100%;
  margin-bottom: .563rem;
}

.blank {
  width:100%;
  height:4px;
  position: relative;
  top: -2px;
  background: #fff;
}
</style>
