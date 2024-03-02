<template>
 <div class="view-template">
    <router-link to="/home"> <div class="back"> X </div>  </router-link>
     <h3>Profil</h3>
     <mod_option :tab="this.tab"> niveau: </mod_option>
  </div>
</template>

<script>
import mod_option from "../components/display/module-display.vue"
export default {
    name: "profil-view",
    components:{
     mod_option,
    },
    data(){
      return{
        tab:[
          {
            name:'Profil',
            active: false,
            domaines:[
              {
                name:`Je m'appelle Koné Clément. Je suis étudiant dans le domaine du développement web depuis Janvier 2021.
                Je recherche une première expérience professionnelle en tant que développeur frontend Junior.
                À ce stade de ma progression, je me considère autonomme dans certains domaines. Je pense cependant avoir besoin
                de l'avis ainsi que de l'expertise d'autres développeurs plus expérimentés pour passer au niveau suivant de mon apprentissage. `,
                niveau:''
              }
            ]
          },
          {
            name:'Court terme',
            active: false,
            domaines:[
              {
                name: `À court terme. J'envisage de me former par le biais de l'alternance et de me spécialiser dans un premier temps coté frontend (Reactjs, Angular, UX, UI design) pendant 1 an. `,
                niveau:''
              },
            ]
          },
          {
            name: 'Long terme',
            active: false,
            domaines: [
              {
              name:`Suite à cela, je souhaite renforcer mes compétences coté backend pour plus de polyvalence, et pourquoi pas apprendre un langage de programmation
            non nécessairement web comme python ou Java.
            (mes plans peuvent changer suivant l'évolution du monde de la tech et ses opportunités).`,
              niveau:''
              }
            ]
          },
            ]
      }
    }

}
</script>

<style>

</style>