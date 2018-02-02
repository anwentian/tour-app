<template>
  <div class="selections" v-if="selects.length">
    <subtitle :subtitle="'精选路线'"></subtitle>
    <div class="selection">
      <ul>
        <router-link tag="li" :to="'/detail/'+select.productId" v-for="(select,index) in selects" :key="index">
          <div>
            <img :src="select.img"/>
            <div class="info">
              <p class="description">{{select.descrip}}/p>
              <p class="price"><span>{{select.price|currency}}</span><span>起</span></p>
              <span class="type">{{select.type}}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
  
</template>

<script>
import Subtitle from './Subtitle'
export default {
  name: 'Selection',
  props: {
    selects: {
      type: Array
    }
  },
  components: {
    'subtitle': Subtitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.selections {
    background: #fff;
    margin-top:0.125rem;
    padding-top:.375rem;
    padding-bottom:.75rem;
}
.selection {
  margin-top: .25rem;
  padding-left: .375rem;
  padding-right: .375rem;
}
.selection ul {
  width: 100%;
  display: flex;
  overflow: hidden;
}
.selection ul li {
  flex: 1;
  border: 1px solid #dfdfdf;
  border-radius: 0.125rem;
  position: relative;
  overflow: hidden;
}
.selection ul li:first-child {
  margin-right: 0.5rem;
}
.selection img {
  width: 100%;
  height: 3.188rem;
}
.info {
  overflow:hidden;
  padding: 0.125rem 0.25rem 0.25rem;
  font-size:12px;
}
.info p {
  line-height:1.5;
}
.description {
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size:14px;
}
.price span:first-child {
  font-size:14px;
  color:#c5129a;
  
}
.price span:last-child {
  color:rgb(136, 136, 136);
}
.type {
  position:absolute;
  top: 0;
  left: 0;
  padding-left: .375rem;
  padding-right:.375rem;
  color: #fff;
  background: rgba(0,0,0,0.5);
  font-size:14px;
  line-height: 1.5;
  border-radius:0.25rem;
}
</style>
