<template>
   <div class="module satelite" id="projets" @mouseover="addHoverEffect()" @mouseout="removeHoverEffect()">
    <h2>Projets</h2>
    <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
  
   </div>

</template>

<script>
export default {
   name: "coordonnées-item",
   data(){
    return{
      
    }
    
   },
   methods:{
   addHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.add('hover-effect-projet');
   },
   removeHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.remove('hover-effect-projet');
    }
  }

}
</script>

<style>
#projets{
    top: 0%;
    left: 72%;
    width: 100px;
    height: 100px;
    font-size: 9px;
}
.hover-effect-projet {
   background: rgb(233,138,30);
background: linear-gradient(280deg, rgba(233,138,30,1) 0%, rgba(185,233,99,1) 100%); 
}

</style>