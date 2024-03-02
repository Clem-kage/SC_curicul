<template>
  <div class="view-template">
    <router-link to="/home"> <div class="back"> X </div>  </router-link>
     <h3>expériences</h3>
     <mod_option :tab="this.tab"> 
      <!-- <template v-slot:link> <br><a href="https://github.com/Clem-kage?tab=repositories">Github</a></template>  -->
     </mod_option>
  </div>

</template>

<script>
import mod_option from "../components/display/module-display.vue"
export default {
  name:"expériences-view",
  components:{
    mod_option
  }, 
  data(){
    return{
      tab:[
        {
          name:'INFREP',
          active: false,
          domaines:[
            {
            name:`J'ai pu participer à un stage de fin de formation en juin 2021 dans l'entreprise Antilook 
            pour une mission de développement Frontend. Ce stage impliquait la création d'un agenda en Javacript pour une application
            web en php (Symfony). `,
            niveau: ""
            },
          ]
          },
        {
          name: 'Perso',
          active: false,
          domaines:[
            {
              name:`Je manque d'expérience professionnelle  en entreprise donc, je m'entraine avec des projets 
              freelance ou fictifs, principalement coté front end pour le moment. La plupart de ces projets seront sur mon Github.`
              ,
              niveau: ""
            }
          ]
        }    

            ]
            
    }
  }
}
</script>

<style>
/* a{
  text-decoration: none; 
  color: white;
  font-size: 25px;
} */

</style>