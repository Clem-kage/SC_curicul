<template>
   <div class="module satelite" id="exp" @mouseover="addHoverEffect()" @mouseout="removeHoverEffect()">
    <h2>Expériences</h2>
    <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="black"  fill-opacity="0.01"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.019 4V15.0386L6.27437 39.3014C5.48686 40.9283 6.16731 42.8855 7.79421 43.673C8.23876 43.8882 8.72624 44 9.22013 44H38.7874C40.5949 44 42.0602 42.5347 42.0602 40.7273C42.0602 40.2348 41.949 39.7488 41.7351 39.3052L30.0282 15.0386V4H18.019Z" stroke="white" stroke-width="4" stroke-linejoin="round"/>
<path d="M10.9604 29.9998C13.1241 31.3401 15.2893 32.0103 17.4559 32.0103C19.6226 32.0103 21.7908 31.3401 23.9605 29.9998C26.1088 28.6735 28.2664 28.0103 30.433 28.0103C32.5997 28.0103 34.7755 28.6735 36.9604 29.9998" stroke="white" stroke-width="4" stroke-linecap="round"/>
</svg>
   </div>
</template>   
<script>
export default {

  methods:{
   addHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.add('hover-effect-exp');
   },
   removeHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.remove('hover-effect-exp');
    }
  }

}
</script>

<style>
#exp{
  left: 88%;
  top: 30%;
  width: 160px;
  height: 160px;
  font-size: 10px;
}
.hover-effect-exp {
background: rgb(28,212,10);
background: linear-gradient(280deg, rgba(28,212,10,1) 0%, rgba(255,254,210,1) 100%); 
}
</style>