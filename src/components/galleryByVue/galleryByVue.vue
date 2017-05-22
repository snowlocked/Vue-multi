<template>
  <div class="wrap">
  	<div class="photo" v-for="" :class="{'photo-center':isCenter}">
  		<div class="photo-wrap">
  			<div class="side side-front">
  				<p class="img"></p>
  				
  			</div>
  			<div class="side side back"></div>
  		</div>
  	</div>
  	<div class="nav"></div>
  </div>
</template>

<script>
import './galleryByVue.vue';

import imageDatas  from 'assets/json/tianma.json';
console.log(imageDatas);

export default {
  components: {
    
  }
}
</script>


