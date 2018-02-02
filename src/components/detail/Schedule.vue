<template>
  <div  class="schedule"> 
    <div class="section" v-if="summary">
      <h2>行程概要：</h2>
      <p v-if="summary.food">{{summary.food}}</p>
      <p v-if="summary.accommodation">{{summary.accommodation}}</p>
      <p v-if="summary.trip">{{summary.trip}}</p>
      <p v-if="summary.shopping">{{summary.shopping}}</p>
      <p v-if="summary.traffic">{{summary.traffic}}</p>
    </div>
    <div v-for="(item,index) in schedule.items" :key="index">
      <schedule-item class="section" :scheduleItem="item"></schedule-item>
    </div>
  </div>
</template>

<script>
  import ScheduleItem from './ScheduleItem'
  export default {
    name: 'Schedule',
    components: {
      'schedule-item': ScheduleItem
    },
    props: {
      schedule: {
        type: Object
      }
    },
    computed: {
      summary () {
        return this.schedule.summary
      }
    }
  }
</script>

<style scoped>
  .section {
    padding: .375rem;
    margin-bottom: .125rem;
    background: #fff;
    color: #666;
  }
  .section h2 {
    margin-bottom: .375rem;
    font-size: 16px;
    color: #333;
    font-weight:700;
  }
  .schedule p {
    color: #888;
  }

</style>