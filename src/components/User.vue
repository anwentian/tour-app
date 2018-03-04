<template>
  <div class="user">
  
    <div class="user-top">
      <div class="user-tool">       
      </div>
      <div class="user-pic">
        <img src="../assets/images/user-pic.png"></img>
      </div>
      <div class="login">
        <div class="btn">登录 / 注册</div>
      </div>
    </div>
    <div class="user-bottom">
      <ul>
        <li class="user-list">
          <a class="order" href="#">
            我的订单
          </a>
        </li>
        <li class="user-list">
          <router-link tag="div"  :to="{path:'/products_lists',query:{collect:'collected'}}">
          <a class="collected" href="#">
            我的收藏
          </a>
          </router-link>
        </li>
        <li class="user-list">
          <a class="user-info" href="#">
            常用信息
            <span class="right">旅客&地址&发票</span>
          </a>
        </li>
        <li class="user-list">
          <a class="coupons" href="#">
            优惠券
          </a>
        </li>
        <li class="user-list">
          <a class="about" href="#">
            关于我们
          </a>
        </li>
      </ul>
    </div>  
  </div>
  
</template>

<script>
export default {
  name: 'User'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  float: right;
  padding-right:.75rem;
}
.user-top {
  position: relative;
  height: 6rem;
 background : url('../assets/images/myfragmentbg.png') no-repeat;
 background-size: cover;
}
.user-tool {
  position:absolute;
  top: .25rem;
  left: .25rem;
  width:.625rem;
  height: .625rem;
  background: url('../assets/images/user-tool.png') no-repeat;
  background-size: cover; 
}
.user-pic {
  position: absolute;
  left: 50%;
  top: 2.375rem;
  margin-left: -.6875rem;
  width: 1.375rem;
  height:1.375rem;
}
.user-pic img {
  width: 100%;
}
.login {
  width: 100%;
  position: absolute;
  top: 4rem;
  text-align: center;
}
.btn {
  display: inline-block;
  color: #fff;
  font-size: 14px;
  background:#c5129a;
  border-radius: 1rem;
  line-height: 1.8;
  padding: 0 .375rem;
}
.user-bottom {
  padding:.375rem .375rem 0;
}
.user-list {
  padding: .375rem 0;
  border-bottom: 1px solid #d3d3d3;
  background: url('../assets/images/arrow-r.png') right center no-repeat;
  background-size: .3125rem;   
}
.user-list a {
  box-sizing: border-box;
  display: inline-block;
  padding-left: 1rem;
  width: 100%;
  font-size: 13px;
  color:#000;
  line-height: 1.5;
  background-size: .5rem;
}
.order {
  background:url('../assets/images/user-order.png') left center no-repeat;
}
.collected {
  background:url('../assets/images/user-collected.png') left center no-repeat;  
}
.user-info {
  background:url('../assets/images/user-info.png') left center no-repeat;
}
.coupons {
  background:url('../assets/images/user-coupons.png') left center no-repeat;
}
.about {
  background:url('../assets/images/user-about.png') left center no-repeat;
}
</style>
