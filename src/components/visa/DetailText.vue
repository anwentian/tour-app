<template>
  <div name="detailtext">
    <div class="visa-tab">
      <div @click="cur=0" :class="{selected:cur===0}">产品详情</div>
      <div @click="cur=1" :class="{selected:cur===1}">所需材料</div>
    </div>
    <div v-show="cur===0">
      <div class="table section">
        <table>
          <tr v-for="(item,index) in detail.info" :key=index>
            <td>{{item.dsc}}</td>
            <td>{{item.value}}</td>
          </tr>
        </table>
      </div>
      <div class="section">
        <list class="notic" :content="detail.notic"></list>
        <list classs="precautions" :content="detail.precautions"></list>
        <list class="tips" :content="detail.tips" ></list>
      </div>
    </div>
    <div class="section" v-show="cur===1">
      <list :content="detail.file"></list>
    </div>
  </div>
  
</template>

<script>
import List from '@/components/common/List'
export default {
  name: 'DetailText',
  components: {
    'list': List
  },
  props: {
    detail: {
      type: Object
    }
  },
  data () {
    return {
      cur: 0
    }
  }
}
</script>

<style>
.margin-b {
  margin-bottom: .125rem;
}
.table {
  padding-top: .5rem;
}
table {
  color: #333;
  width: 100%;
  font-size: 14px;
  line-height: 1.8;
  border-collapse: collapse;
}
tr:nth-child(2n+1) {
  background: rgb(251,251,251);
}
td { 
  border: 1px solid #efefef;
  padding-left: .25rem;
}
.visa-tab {
  padding-left: .375rem;
  padding-right: .375rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  background: #fff;
}
.visa-tab div {
    flex: 1;
    text-align: center;
    line-height: 3;
    box-sizing: border-box;
}
.selected {
  border-bottom: 2px solid #c5129a;
  color: #c5129a
}
</style>
