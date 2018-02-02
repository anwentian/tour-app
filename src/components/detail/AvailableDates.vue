<template>
  <div name="available-dates" class="available-dates">
      <h3>出发日期及价格<span>（以下价格均为起价）</span></h3>
      <div class="dates-wrapper">
        <div class="dates">
          <div v-for="(date,index) in availableDates" :key="index" class="date-item">
            <div class="day">{{date.time}}</div>
            <div class="price">{{date.price|currency}}</div>
          </div>
        </div>     
        <div class="more">&gt</div>
      </div>
    </div> 
</template>

<script>
  export default {
    name: 'AvailableDates',
    props: {
      availableDates: {
        type: Array
      }
    }
  }
</script>

<style scoped>
.available-dates h3{
    font-size: 14px;
    padding-left: .7733333333333333rem;
    background: url('../../assets/images/calendar.png') 0 no-repeat;
    background-size: .56rem .56rem;
    height: .56rem;
    line-height: .56rem;
    margin-bottom: .4rem;
  }
  .dates-wrapper {
    display: flex;
  }
  .dates {
    flex:1;
    display: flex;
  }
  .date-item {
    margin-right: .125rem;
    flex: 1;
    border: 1px solid #ededed;
  }
  .available-dates .more {
    display: flex;
    align-items: center; 
    padding-left: .25rem;
  }
  .day {
    color: #888;
    background: #efefef;
    font-size: 10px;
    text-align: center;
    line-height: .625rem;
  }
  .price {
    text-align: center;
    font-size: 14px;
    line-height: .9375rem;
  }

</style>