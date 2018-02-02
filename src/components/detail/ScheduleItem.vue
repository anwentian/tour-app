<template>
  <div name="schedule" class="schedule-item">
    <h3>
      <span class="initial">D</span>{{scheduleItem.day+'&nbsp;&nbsp;'+ scheduleItem.title}}
    </h3>
    <div class="trip-discribe">{{scheduleItem.intro}}</div>
    <div class="accommodation">
      <h4 class="meal">餐饮</h4>
      <ul>
        <li>早餐：{{scheduleItem.food.bf}}</li>
        <li>午餐：{{scheduleItem.food.lc}}</li> 
        <li>晚餐：{{scheduleItem.food.dn}}</li> 
      </ul>
      <h4 class="hotel">住宿</h4>
      <p>{{scheduleItem.accommodation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: {
    scheduleItem: {
      type: Object
    }
  }
}
</script>

<style scoped>
h3 {
  color: #333;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: .25rem;
}
h3 .initial {
  font-size: 28px;
  font-weight: 500;
}
.trip-discribe {
  padding-bottom: .375rem;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
}
.accommodation li,.accommodation p {
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  margin-bottom: .375rem;
}
h4 {
  font-size: 14px;
  padding-left: .75rem;
  margin-bottom: .375rem;
  color: #333;
}
.meal {
  background: url('../../assets/images/food.png') no-repeat;
  background-size: .625rem;
}
.hotel {
  background: url('../../assets/images/house.png') no-repeat;
  background-size: .625rem;
}

</style>