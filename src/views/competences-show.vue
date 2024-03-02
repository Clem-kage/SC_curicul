<template>
   <div class="view-template">
    <router-link to="/home"> <div class="back"> X </div>  </router-link>
     <h3>Compétences</h3>
     <mod_option :tab="this.tab"> niveau: </mod_option>

  </div>

</template>

<script>
import mod_option from "../components/display/module-display.vue"
export default {
   name:"compétences-vue",
   components:{
   mod_option,
},
data(){
   return{
      tab:[
          {
            name:'Backend',
            active: false,
            domaines:[
               {
               name:`Participation à l'évolution au coté backend d'une
                application avec Node js, Express.`,
               niveau:''
               },
               {
               name:`
               Management de base de données
               mongo db / Mysql
               `,
               niveau:''

               }
            ],
         },
         {
            name:'Frontend',
            active: false,
            domaines:[
               {
               name:`Conception de maquettes via figma.`,
               niveau:''
               },{
               name:`
               Intégrations de maquettes en html/css.
               `,
               niveau:''
               },{
                  name:`
                  Participation à la conception et à la mise en place de
                  nouvelles fonctionnalités.
               `,
               niveau:''
               },{
                  name:`
                  Participation à l'évolution d'une interface utilisateur.
               `,
               niveau:''
               },{
                  name:`
                  Analyse et correction des dysfonctionnements d'une
                  interface utilisateur.
               `,
               niveau:''
               }
            ],
         }
      ]
   }
}
}
</script>

<style>

</style>