<template>
  <div name="visa-list" class="visa-list">
    <v-header :title="head"></v-header>
    <div class="list-nav">   
      <ul>
        <li class="close" v-for="(li,index) in listNav" :class="{open:visaSort[index].show,close:!visaSort[index].show}" @click = "changeVisaSort({id:index})">{{li}}</li>
      </ul>       
    </div>
    <visa-box :visaList="targetList"></visa-box>
    <sort v-show="showVisaSort &&visaClicked===0"  @getText="priceSort"></sort>
    <theme-list class="visaSort" v-show="showVisaSort&& visaClicked===1" :clicked="visaClicked" :threeCol="true" :themes="type"  @getType="fetchType"></theme-list>
    <theme-list class="visaSort" v-show="showVisaSort&& visaClicked===2" :clicked="visaClicked" :threeCol="true" :themes="address" @getType="fetchAddress"></theme-list>
    <div class="no-data" v-if="!targetList.length">暂时没有搜索到数据</div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Header from '@/components/Header'
import Sort from '@/components/common/Sort'
import ThemeList from '@/components/common/ThemeList'
import VisaBox from './VisaBox'
export default {
  name: 'visaList',
  components: {
    'v-header': Header,
    'visa-box': VisaBox,
    'sort': Sort,
    'theme-list': ThemeList
  },
  props: {
    tour: {
      type: Object
    }
  },
  data () {
    return {
      list: [],
      targetList: [],
      listNav: ['推荐排序', '签证类型', '送签地'],
      country: ''
    }
  },
  computed: {
    ...mapState(['showVisaSort', 'visaSort', 'visaClicked']),
    allList () {
      return this.tour.visa.visaList
    },
    type () {
      return this.tour.visa.type
    },
    head () {
      return this.country + '签证'
    },
    address () {
      let adsList = this.list.map(visa => { return visa.ads })
      return [...new Set(adsList)]
    }
  },
  methods: {
    ...mapMutations(['changeVisaSort']),
    priceSort (type) {
      if (type === '价格从高到低') {
        return this.targetList.sort((a, b) => { return b.price - a.price })
      } else if (type === '价格从低到高') {
        return this.targetList.sort((a, b) => { return a.price - b.price })
      } else {
        return this.targetList.sort((a, b) => { return a.visaId - b.visaId })
      }
    },
    fetchType (visaType) {
      this.targetList = this.list.filter((item, index) => {
        return item.type === visaType
      })
    },
    fetchAddress (address) {
      this.targetList = this.list.filter((item, index) => {
        return item.ads === address
      })
    },
    fetchData () {
      this.country = decodeURI(this.$route.query.country)
      const _this = this
      this.list = this.allList.filter(visa => { return visa.dest === _this.country })
      this.targetList = this.list
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
  .visa-list {
    padding-top: 3rem;
  }
  .list-nav {
    position: fixed;
    top: 1.5rem;
    width: 100%;
  }
  .list-nav ul{
    display: flex;
    background: #f8f8f8;
  }
  .list-nav ul li {
    text-align:center;
    flex: 1;
    font-size: 12px;
    color: #666;
    height: 1rem;
    line-height: 1rem;
  }
  .close::after {
    content: "";
    width:0;
    height:0;
    border-width:6px 6px 0 ;
    border-style:solid;
    border-color: #666 transparent transparent;
    position: relative;
    top: 12px;
    margin-left: 4px;
  }
  .open::after {
    content: "";
    width:0;
    height:0;
    border-width: 0 6px 6px;
    border-style:solid;
    border-color: transparent transparent #666;
    position: relative;
    top: -10px;
    margin-left: 4px;
  }
  .no-data {
  margin-top: 6rem;
  text-align: center;
}

</style>
