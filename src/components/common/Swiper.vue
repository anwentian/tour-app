<template>
  <div  id="banner" name="swiper"> 
    <div class="carousel" >             
      <ul class="carousel-list">
        <li v-for="item in images" class="carousel-item">            
          <img :src="item"/>
        </li>          
      </ul>
    </div>   
    <ol class="carousel-indicators">
      <li class="carousel-generic active"></li>
      <li class="carousel-generic"></li>
      <li class="carousel-generic"></li>
    </ol>
  </div>
</template>

<script>
import Slider from '../../assets/js/slider.js'
export default {
  name: 'Swiper',
  props: {
    images: {
      type: Array,
      default () {
        return ['static/img/home/banner1.jpg', 'static/img/home/banner2.jpg', 'static/img/home/banner3.jpg']
      }
    }
  },
  data () {
    return {
      slider: null
    }
  },
  methods: {
    clearTimer () {
      clearTimeout(this.slide.timer)
      // eslint-disable-next-line
      return
    }
  },
  mounted () {
    this.slide = new Slider()
  },
  destroyed () {
    this.clearTimer()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#banner ol {
  list-style: none;
}
#banner {
  margin: 0 auto;
  max-width:475px;
  width:10rem;
  height: 5.625rem;
  overflow: hidden;
  position: relative;
}
#banner img {
  max-width: 100%;
}
.carousel-indicators {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: .75rem; 
}
.carousel-generic ol {
  margin: 0 auto;
  height: .375rem;
}
.carousel-generic {
  width: .375rem;
  height: .375rem;
  border-radius: .188rem;
  background: #fff;
  float: left;
  margin-left:.313rem;
  margin-right:.313rem;  
  cursor: pointer;

}

.carousel-generic.active {
  background: #999;
}
.carousel {
  width: 100%;
  height: 100%;
    
}
.carousel-list {
  width: 30rem;
}
.carousel-item {
  float: left;
  width: 100%;
  height: 180px;
  background: #333;
}
.carousel-item 
.carousel-item img {
  width: 100%;
  height: 100%;
}
</style>
