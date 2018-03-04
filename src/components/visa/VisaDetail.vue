<template>
  <div name="visadetail" class="visa-detail">
    <v-header :title="'签证详情'"></v-header>
    <info class="margin-b" :product="visa"></info>
    <detail-text :detail="visa.detail"></detail-text>
  </div>
  
</template>

<script>
import Header from '@/components/Header'
import Info from '@/components/common/Info'
import DetailText from './DetailText'
export default {
  name: 'VisaDetail',
  props: {
    tour: {
      type: Object
    }
  },
  data () {
    return {
      visaId: 0
    }
  },
  computed: {
    visaList () {
      return this.tour.visa.visaList
    },
    visa () {
      let _this = this
      let target = this.visaList.find(visa => { return visa.visaId === +_this.visaId })
      return target
    }
  },
  components: {
    'v-header': Header,
    'info': Info,
    'detail-text': DetailText
  },
  watch: {
    $route () {
      this.visaId = this.$route.params.visaId
    }
  },
  created () {
    this.visaId = this.$route.params.visaId
  }
}
</script>

<style>
.visa-detail {
  background:#f0f0f0;
  padding-bottom: 1.5rem;
}
.margin-b {
  margin-bottom: .125rem;
}
</style>
