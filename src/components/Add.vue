<template>
  <div  class="addcontainer" >
  <h1 class="page-header">    添加用户      </h1>
   <form  v-on:submit="addcustomer">
     <div class="well">
  <h4>  用户信息 </h4>
  <div class="form-group">

    <label> 姓名  </label>
    <input  type="text"  class="form-control"    placeholder="name"  v-model="list.name"   >
  </div>
<div class="form-group">

    <label> 电话  </label>
    <input  type="text"  class="form-control"    placeholder="phone"v-model="list.phone"   >
  </div>

<div class="form-group">

    <label> 邮箱  </label>
    <input  type="text"  class="form-control"    placeholder="mail" v-model="list.mail"   >
  </div>


   
<div class="form-group">

    <label> 个人简介  </label>
    <textarea   class="form-control" rows="4"    ></textarea>
  </div>
   
 <button  type="submit">添加</button>


     </div>
   </form>
  </div>
</template>

<script>
export default {
data(){

    return{
      list:[]
    }
  },
 
  methods:{
 addcustomer(e){


   if(!this.list.name|| !this.list.phone||!this.list.mail                  )
   {
     console.log("请输入完整信息")
   }else{
       let newList={
         name:this.list.name,
        phone: this.list.phone,
         mail:  this.list.mail 


       }

   
this.$http.post("http://localhost:3004/user",newList).then(res=>{
  console.log(res)
})
    
  }
  e.preventDefault();
  }

  }

}
</script>

<style>
 .page-header{

   margin-top: 80px;
 }
</style>
