<template>
   <div class="module satelite" id="formation"  @mouseover="addHoverEffect()" @mouseout="removeHoverEffect()">
    <h2>Formations</h2>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/></svg>
   </div>
</template>

<script>
export default {
    methods:{
   addHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.add('hover-effect-form');
   },
   removeHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.remove('hover-effect-form');
    }
  }


}
</script>

<style>
#formation{
    width: 120px;
    height: 120px;
    top: 45%;
    left: -15%;
    font-size: 12px;
}
.hover-effect-form {
background: rgb(212,43,10);
background: linear-gradient(280deg, rgba(212,43,10,1) 0%, rgba(233,213,99,1) 100%); 
}
</style>