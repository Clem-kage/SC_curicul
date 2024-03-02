<template>
   <div class="view-template">
    <router-link to="/home"> <div class="back"> X </div>  </router-link>
    <h3>Formations</h3>
    <mod_option :tab="this.tab"> niveau: </mod_option>
  </div>
</template>

<script>
import mod_option from "../components/display/module-display.vue"
export default {
   name:"formation-view",
   components: {
      mod_option
   },
   data(){
      return{
         tab:[
            {
               name:"INFREP",
               active: false,
               domaines:[
                  {
                     name:"Durée",
                     niveau: "6 mois intensifs de janvier à juin 2021"
                  },
                  {
                     name: "Certification",
                     niveau: "Développeur fullstack"
                  },
                  {
                     name: "Description",
                     niveau: `C'est une formation qui à eu pour but de m'introduire aux principes et aux langages de programmation
                     web. Coté frontend j'y ai appris les bases du javascript (version ES5), ainsi que l'utilisation du framework Reactjs. et coté backend PHP avec symfony.
                     Html, css, git et mySql étaient aussi au programme.
                     .' `
                  },
                  

               ],
            

            },
            {
               name:"Openclassrooms",
               active: false,
               domaines:[
                  {
                     name:"Durée",
                     niveau: "1 an de janvier à Décembre 2022"
                  },
                  {
                     name: "Certification",
                     niveau: "Titre professionnel intégrateur/développeur web Bac +2"
                  },
                  {
                     name: "Description",
                     niveau: `C'est une formation plus tournée vers le javacript que ce soit en frontend ou backend.
                     J'y ai appris Node js avec Express et Mongo db (introduction au NoSql) coté Backend et Vue js 3 coté Frontend.
                     Des notions en SEO y étaient aussi délivrées.`
                  },
               ]  

            }
         ]
      }
   }
}
</script>

<style>

</style>