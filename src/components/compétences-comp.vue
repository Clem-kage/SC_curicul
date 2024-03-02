<template>
   <div class="module satelite" id="competences"  @mouseover="addHoverEffect()" @mouseout="removeHoverEffect()">
   <h2>Compétences</h2>
   <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
<rect x="72.078" y="192.147" style="fill:auto;" width="95.452" height="121.96"/>
<rect x="208.269" y="98.541" style="fill:auto;" width="95.452" height="215.576"/>
<rect x="344.47" width="95.452" height="314.107"/>
<g>
	<polygon style="fill:auto;" points="113.022,512 99.429,492.214 202.567,421.303 237.634,468.052 351.405,388.42 
		365.174,408.078 232.37,501.039 197.19,454.139 	"/>
	<polygon style="fill:auto;" points="375.783,458.851 351.781,458.851 351.781,394.749 287.687,394.749 287.687,370.747 
		375.783,370.747 	"/>
</g>
</svg>
   </div>
</template>

<script>
export default {
  methods:{
   addHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.add('hover-effect-comp');
   },
   removeHoverEffect(){
      let cvAp = document.querySelector('html')
      cvAp.classList.remove('hover-effect-comp');
    }
  }
}
</script>

<style>
#competences{
  top: 88%;
  height: 180px;
  width: 180px;
  font-size: 15px;
  left: 35%
}

.hover-effect-comp {
background: rgb(251,5,5);
background: linear-gradient(280deg, rgba(251,5,5,1) 0%, rgba(255,215,248,1) 100%); 
}




</style>