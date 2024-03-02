<template>
   <div class="view-template">
    <router-link to="/home"> <div class="back"> X </div>  </router-link>
     <h3>Projets</h3>
     <mod_option :tab="this.tab"> 
          <template v-slot:link> <br> <br> <a class="linkSlot" href="https://github.com/Clem-kage?tab=repositories">: Github</a></template> 
    </mod_option>
  </div>
</template>

<script>
import mod_option from "../components/display/module-display.vue"
export default {
  name:"coordonnées-view",
  components:{
    mod_option,
  },
  data(){
    return{
      tab:[
        {
          name: 'Github',
          link: false,
          active: false,
          domaines:[
            {
              name:`Vous trouverez certain de mes algorithmes et projets sur mon github. Certains sont des algorithmes de pratique sans prétentions, et d'autre des projets en développements
              en cours de conception. Je vous laisse les découvrir.`,
              niveau: ""
            }
          ]
        },
        {
          name: 'Virginie massage',
          linkCode: "https://clem-kage.github.io/virginie-proto/",
          link: true,
          active: false,
          domaines:[
            {
              name:`Vous trouverez certain de mes algorithmes et projets sur mon github. Certains sont des algorithmes de pratique sans prétentions, et d'autre des projets en développements
              en cours de conception. Je vous laisse les découvrir.`,
              niveau: ""
            }
          ]
        },
        {
          name: 'ohMyfood',
          linkCode: "https://clem-kage.github.io/projet-3-openclassrooms-/code/index.html",
          link: true,
          active: false,
          domaines:[
            {
              name:"Pour l'instant, je vous laisse mon profil github, mais l'accès à mes applications seront ajoutés d'ici peu."
              ,
              niveau: ""
            }
          ]
        },
        {
          name: 'Booki',
          linkCode: "https://clem-kage.github.io/projet-2-openclassrooms_2/code/index.html",
          link: true,
          active: false,
          domaines:[
            {
              name:"Pour l'instant, je vous laisse mon profil github, mais l'accès à mes applications seront ajoutés d'ici peu."
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
.linkSlot{
  text-decoration: none; 
  color: white;
  font-size: 25px;
}

</style>