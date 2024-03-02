<template>
   <div id="temp">
        <div class="menu">
           <div v-for="(item, index) in this.items" :key="index" class="item" :id="index"
                 :class="{active: item.active}"
                 @click="change($event, item), active(items)"
                 >
                 {{item.name}}
               </div>
                 <a v-for="(lnk, index) in this.liens" :key="index + 1"
                 :href="lnk.linkCode" target="_blank"  class="item" >
                 {{ lnk.name }} 
               </a>
              
           </div>
           
    
   
     
      <div class="content">
         <ul>
                   &nbsp;<li v-for="(item, index) in tab[this.index].domaines" :key="index"> <span>{{ item.name }}</span> <slot name="link"> </slot> <span>{{item.niveau}}</span></li> &nbsp;
            </ul>
         </div>
         <!-- <div class="content"
          v-show="this.itemTwo.active">
            <ul>
              <li v-for="(item, index) in front" :key="index"> <span>{{ item.name }}</span>  <span>{{item.niveau}}</span></li>
            </ul>
         </div> -->
      </div>

        
</template>

<script>
export default {
     name:"module-display",
     props:['tab'],
     mounted(){
         this.active(this.items)
         // console.log(this.liens)
     },
     computed:{
      liens(){
      return this.tab.filter((el)=>
         el.link == true
        )
      },
      items(){
      return this.tab.filter((el)=>
         el.link == false || el.link == null
        )
      },


      //   match(){
         //   this.tab.Foreach(el)=>{
         //        el
         //   }
      //   },
         // itemOne(){
         //    return this.tab[0]
         // },
         // itemTwo(){
         //    return this.tab[1]
         // },
         // itemThree(){
         //    return this.tab[2]
         // },
         // back(){
         //       return this.tab[0].domaines;
         // },
         // front(){
         //       return this.tab[1].domaines;
         // }
         act(){
            return this.items[this.index]
         }

     },
     data(){
        return{
           index: 0,
           frontActive: false,
           dta: [],
           links: []
        }
     },
     methods:{
        change(ev){
         // itm.active = !itm.active
         let result  = ev.target.id 
         this.index = result
   //   $set(this.item, 'active', !this.item.active)
         // console.log(itm.active)
         // console.log(ev.target.id, this.index)
         // console.log(this.tab[this.index].domaines)
},
       set(){
            this.tab.forEach(object => {
                this.dta.push(object)
            });
            // console.log(this.dta)
         },

         active(array){
   if(this.act){
   array.forEach((el)=>{
      if(el !== this.act)
      // console.log(el)
      return el.active = false
   })
 this.act.active = true;
}
     }

        // console(){
        //     console.log(this.tab)
        // }
     }
}
</script>

<style>
h3{
   color: white;
   font-size: 30px;

}
.menu{
    margin: 0 auto;
    /* border: solid black 1px; */
    display: flex;
    justify-content: space-evenly;
}
.item{
    height: 50px;
    color: white;
    /* width: au; */
    padding: 0px 10px;
    border: solid white 2px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;  
    transition: .3s;
}
.item:hover, .active{
    color: rgb(93, 16, 92);
    /* border-color:  rgb(93, 16, 92); */
    background-color: white;
}
ul{
   /* margin-top: 10%; */
   padding: 8% 2%;
}
ul li{
   list-style: none;
   /* margin-top: 2%; */
   color: white;
   padding: 0px 200px;
}
li span{
   font-size: 25px;
   margin-right: 2%
}
li span:nth-child(2){
   font-size: 20px;
   margin-left: 1%;
}
/* .listAppa-enter-active{
   animation: listAppa .8s ease-in;
}
.listAppa-leave-active{
   animation: listDispa .8s ease-in;
}
 */  
@keyframes listAppa{
  from{
   transform: translateY(20px);
     opacity: 0
  }
  to{
     opacity: 1
  }
}
/* @keyframes listDispa{
  from{
     opacity: 1
  }
  to{
     opacity: 0
  }
} */
/* .temp{
   overflow: auto; 
} */


  .content {
    animation: listAppa .5s ease-in-out;
  }

  /* #temp{
       margin-top: 50px; 
    }  */
  


  /* @media screen and (max-width: 800px) {
    #temp{
       margin-top: 50px; 
    } 
    


  }*/
 

</style>