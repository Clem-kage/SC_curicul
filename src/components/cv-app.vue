

<template>
    <div class="cv-app circle">
      <transition name="apparition">
<router-link to="/technologies"> <technos /> </router-link>  
      </transition>

            <div class="circle fst">
                 <router-link to="/profil"> <profil /> </router-link>
                <router-link to="/projets"> <projets /> </router-link>
                <router-link to="/formation"> <formation /> </router-link>
            </div>
            <router-link to="/experience"> <exp/> </router-link>
            <router-link to="/competences"> <competences /> </router-link> 

  
    <div class="temp">
      <router-view/>
    </div>


    </div>
       
  </template>

<script>
import profil from './profil-comp.vue'
import projets from './projets-comp.vue'
import technos from './technologies-comp.vue'
import competences from './compétences-comp.vue'
import formation from './formation-com.vue'
import exp from './expériences-comp.vue'


export default {
    name:"cv-comp",
    components:{
        profil,
        projets,
        technos,
        competences,
        formation,
        exp
    },
    data(){
        return {

        }
    },
    methods:{
      showMode(){
      this.show = !this.show
      console.log(this.show)
   }
    }


}
</script>

<style>

/* body{ */
  /*height: 100%; */
  /* background-size: 100%; */
  /* background: rgb(255,60,100); 
  background: linear-gradient(49deg, rgba(255,60,100,1) 5%, rgba(255,236,90,1) 26%, rgba(113,27,119,1) 61%, rgba(32,245,149,1) 78%);   background-size: 400% 400%;
   animation: gradient 15s ease infinite; */

/* }  */
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


  .circle{
    width: 520px;
    height: 520px;
    border: solid white 1px;
    margin: 0 auto;
    position: relative;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 50%;
    transition: .3s;
    }
   
  .fst{
    width: 350px;
    height: 350px;
  }
  .temp{
    position: absolute;
    /* overflow: auto; */
  }


 
 





  


</style>