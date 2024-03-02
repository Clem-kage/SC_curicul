<template>
  <div class="view-template">

    <router-link to="/home"> <div class="back"> X </div>  </router-link>
    <h3> Frameworks, langages et concepts de programmation </h3>
   <mod_option :tab="this.tab"> niveau: </mod_option>
  </div>
</template>

<script>
import mod_option from "../components/display/module-display.vue"
export default {
name: "technoShow",
components:{
   mod_option,
},
data(){
  return{
      tab: [
        // {
        //   name: "contexte",
        //   active: false,
        //   domaines:[
        //     {
        //        name: "Notation",
        //        niveau: `Je ne considère pas avoir un niveau suffisant pour prétendre maîtriser une technologie 
        //        de A à Z  `
        //     }
        //   ]
        // },
        { 
          name:'Backend',
          active: false,      
          domaines:[
            {
              name: "Node js",
              niveau: "Intermédiaire",
            },
            {
              name: "Express",
              niveau: "Autonome",
            },
            {
              name: "Mysql",
              niveau: "Autonome",
            },
            {
              name: "Mongodb",
              niveau: "Autonome",
            },

          ]
        },
        {
          name: "Frontend",
          active: false,  
          domaines:[
            {
              name: "Javascript",
              niveau: "Autonome",
            },
            {
              name: "Typescript",
              niveau: "Intermédiaire",
            },
            {
              name: "Vuejs 2 / 3",
              niveau: "Autonome",
            },
            {
              name: "Sass",
              niveau: "Autonome",
            },
            {
              name: "Reactjs",
              niveau: "Intermédiaire",
            },
            {
              name: "Html / Css",
              niveau: "Autonome",
            },
            {
              name: "Figma",
              niveau: "Intermédiaire",
            },
            
          ],
        },
        {
          name: "concepts en cours d'apprentissages",
          active: false,  
          domaines:[
            {
              name: "Pratiques de clean code",
              niveau: "",
            },
            {
              name: "Design patterns",
              niveau: "",
            },
            {
              name: "Polymorphisme",
              niveau: "",
            },
            {
              name: "Testing",
              niveau: "",
            },
            
          ],
        }
        
      ]
  }
}
}
</script>

<style>
.view-template{
  width: 80vw;
  height: auto;
  border: white solid 3px;
  border-radius: 20px;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  animation: appa .3s ease-in-out;
}
@keyframes appa{
 from {
  opacity: 0
}
to{
  opacity: 1
}
}

.back{
  width: 50px;
  height: 50px;
  border: solid white 3px;
  display: flex; 
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: -90px;
  transition: .3s;
  cursor: pointer;
  color: white;
  font-size: 25px;
}
.back:hover{
  color: black;
  background-color: white;
}

@media screen and (max-width: 1150px) {
 
  .view-template{
    height: auto;
    transform: translate(-50%, -55%);
    right: 20%;
    font-size: 1rem;
  }
  .view-template li span{
    font-size:.8rem;
  }
  .back{
    right: 20px;

  }
  .view-template li{
    padding: 0; 
  }
  .view-template h3{
    margin-top: 50px;
  }
  .view-template .menu{
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 5%
  }
  .view-template .item{
    margin-top: 10px;
  }

}

@media screen and (max-width: 800px) {
    
  .view-template{
    height: auto;
    transform: translate(-50%, -25%);
    right: 20%;
  }
  }
</style>