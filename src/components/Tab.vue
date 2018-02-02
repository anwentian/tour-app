<template>
  <div class="tab">
    <router-link tag="div" to="/home" active-class="tab-active">
      <span class="tab-icon" id="home-icon"></span>
      <p>首页</p>
    </router-link>
    <router-link tag="div" to="/dest" active-class="tab-active">
      <span class="tab-icon" id="dest-icon"></span>
      <p>目的地</p>
    </router-link>
    <router-link tag="div" to="/user" active-class="tab-active">
      <span class="tab-icon" id="user-icon"></span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
    }
  }
}
</script>

<style>
.tab {
    position: fixed;
    z-index: 99;
    bottom: 0;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    width: 100%;
    display: flex;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    background-color: #fff;;
    color:#5D656B; 
    border-top: 1px solid #efefef;
}
.tab p { font-size:14px;}
.tab div {
    flex: 1;
}
.tab div span {
    display: inline-block;
    width:22px;
    height: 22px;
}
#home-icon {
    background: url('../assets/images/home.png')
}
#dest-icon {
    background: url('../assets/images/dest.png')
}
#user-icon {
    background: url('../assets/images/user.png')
}
.tab-active { color:#c6129b; }
.tab-active #home-icon {
   background: url('../assets/images/home-active.png') 
}
.tab-active #dest-icon {
   background: url('../assets/images/dest-active.png') 
}
.tab-active #user-icon {
   background: url('../assets/images/user-active.png') 
}
</style>
