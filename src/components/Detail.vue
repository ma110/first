<template>
  <div class="container">
    
   <h1 class="header"> 关于</h1>
   <ul>
   <li>        {{lists.name}}     </li>
    <li>       {{lists.phone}}     </li>
       <li>       {{lists.mail}}     </li>
       </ul>
       <p>           {{lists.message}}                  </p>
  </div>
</template>

<script>
export default {
data(){

    return{
      lists:""
    
    }
  }, created(){
   this.good(this.$route.params.id)},

  methods:{
 good(id){
this.$http.get("http://localhost:3004/user/"+id).then(res=>{     //user后面必须有个/ id   才能接上
    console.log(res);
    this.lists=res.body;
  
})
    
  }
  
 
  }
  }


</script>

<style>
 .header{
     margin-top: 50px;
 }


</style>
