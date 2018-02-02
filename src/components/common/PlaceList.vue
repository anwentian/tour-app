<template>
  <div name="place-list" class="place-list">
    <ul>
      <router-link tag="li" :to="{path:'/products_lists',query:{dest:encodeURI(place)}}" v-for="(place,index) in places" :key="index" class="city">
        <a>{{place}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlaceList',
  props: {
    places: {
      type: Array
    }
  }
}
</script>

<style>
.place-list ul {
  padding-left: .25rem;
  padding-right: .25rem;
}
.city {
  display: inline-block;
  width: 33.3%;
  height: .75rem;
  line-height: 1;
  border-bottom: 1px solid #dfdfdf;
  align-items: center;
  text-align:center;
  padding-top:.188rem;
  padding-bottom:.188rem;
}

.city a {
  width:100%;
  display:inline-block;
  border-right: 1px solid #dfdfdf;
  font-size: 14px;
  color: #000;
}
.city:nth-child(3n) a {
  border-right: none;
}
</style>
