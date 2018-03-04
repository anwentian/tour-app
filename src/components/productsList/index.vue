<template>
  <div class="products-list">
    <div class="list-top">
      <v-header :title="title"></v-header>
      <div class="list-nav">   
        <ul>
          <li v-for="(li,index) in listNav" :class="{open:sort[index].show,close:!sort[index].show}" @click = "changeSort({id:index})">{{li}}</li>
        </ul>       
      </div>  
    </div>
    <list-main v-if="list.length" :list="list"></list-main> 
    <sort v-show="showSort&& (view==='sort')" @getText="getTargetData"></sort>
    <theme-list :themes="themes"  :clicked="clicked" v-show="showSort&&(view==='theme-list')" @getType="getTargetData"></theme-list>
    <day-list :days="days" :clicked="clicked" v-show="showSort&&(view==='day-list')" @getTargetDate="getTargetData"></day-list>
    <div class="no-data" v-if="!list.length">暂时没有搜索到数据</div>
  </div> 
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Header from '@/components/Header'
import ListMain from './ListMain'
import Sort from '@/components/common/Sort'
import ThemeList from '@/components/common/ThemeList'
import DayList from './DayList'
export default {
  name: 'ProductsList',
  props: {
    tour: {
      type: Object
    }
  },
  data () {
    return {
      listNav: ['推荐排序', '主题玩法', '行程天数'],
      list: [],
      productsList: [],
      defaultTheme: ['海岛游', '亲子游', '休闲游', '购物血拼', '免/落地签', '自然风光', '蜜月游', '人文景观', '婚纱摄影', '多国联游', '爱玩户外', '美食'],
      defaultDay: { 'min': 6, 'max': 10 }
    }
  },
  computed: {
    ...mapState(['clicked', 'showSort', 'sort', 'allProducts', 'collectList']),
    type () {
      return this.$route.query.type
    },
    days () {
      if (this.type) {
        return this.tour[this.type].day
      } else {
        return this.defaultDay
      }
    },
    themes () {
      if (this.type) {
        return this.tour[this.type].theme
      } else {
        return this.defaultTheme
      }
    },
    title () {
      if (this.type) {
        return this.tour[this.type].name
      } else if (this.$route.query.dest) {
        return decodeURI(this.$route.query.dest)
      } else if (this.$route.query.collect) {
        return '我的收藏'
      }
    },
    view () {
      switch (this.clicked) {
        case 0: return 'sort'
        case 1: return 'theme-list'
        case 2: return 'day-list'
        default: return 'sort'
      }
    }
  },
  methods: {
    ...mapMutations(['changeSort']),
    priceSort (list, type) {
      if (type === '价格从高到低') {
        return list.sort((a, b) => { return b.price - a.price })
      } else if (type === '价格从低到高') {
        return list.sort((a, b) => { return a.price - b.price })
      } else {
        return list.sort((a, b) => { return a.id - b.id })
      }
    },
    themeSort (list, theme) {
      this.list = list.filter((item, index) => { return item.theme.indexOf(theme) > -1 })
    },
    daysSort (list, days) {
      let _this = this
      if (days.indexOf('以下') > -1) {
        this.list = list.filter((item, index) => { return item.days <= _this.days.min })
      } else if (days.indexOf('以上') > -1) {
        this.list = list.filter((item, index) => { return item.days >= _this.days.max })
      } else {
        days = days.slice(0, days.length - 1)
        this.list = list.filter((item, index) => {
          return item.days === +days
        })
      }
    },
    getTargetData (text) {
      switch (this.clicked) {
        case 0:
          this.priceSort(this.list, text)
          break
        case 1:
          this.themeSort(this.productsList, text)
          break
        case 2:
          this.daysSort(this.productsList, text)
          break
        default:
          this.priceSort(this.productsList, 'default')
      }
    },
    fetchData () {
      const type = this.type
      const theme = this.$route.query.theme
      const dest = this.$route.query.dest
      const collected = this.$route.query.collect
      if (type) {
        if (theme) {
          this.productsList = this.tour[type].products.filter(product => {
            return product.theme.indexOf(decodeURI(theme)) > -1
          })
        } else {
          this.productsList = this.tour[this.type].products
        }
      } else if (dest) {
        this.productsList = this.allProducts.filter(product => { return product.dest.indexOf(decodeURI(dest)) > -1 })
      } else if (collected) {
        let tempArr = []
        console.log(this.collectList)
        for (let i = 0; i < this.collectList.length; i++) {
          let id = this.collectList[i].id
          console.log(id)
          let arr = this.allProducts.find(p => p.productId === id)
          tempArr.push(arr)
        }
        this.productsList = tempArr
        console.log(tempArr)
      }
    }
  },
  watch: {
    $route () {
      this.fetchData()
      this.list = this.productsList
    }
  },
  components: {
    'v-header': Header,
    'list-main': ListMain,
    'sort': Sort,
    'theme-list': ThemeList,
    'day-list': DayList
  },
  created () {
    this.fetchData()
    this.list = this.productsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
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
  margin-top: 8rem;
  text-align: center;
}

</style>
