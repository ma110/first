<template>
  <div class="container">
    
    <h1   class="header">  用户管理系统</h1>
<input  type="text"   class="form-control" placeholder="搜索" v-model="filterInput" >
    <table class="table
      table-striped">
  <thead>
 <tr>
   <th>   序号        </th>
  <th> 姓名  </th>
<th>  电话 </th>
<th> 邮箱  </th>
<th>      </th>
<th> 操作 </th>
 </tr>






  </thead>
  <tbody>
  <tr   v-for=" item in    search(filterInput)" :key="item.id">
    <td> {{item.id}}  </td> 
  <td> {{item.name}}  </td>
  <td> {{item.phone}}   </td>
<td> {{item.mail}}  </td>
<td>    <router-link v-bind:to="'/detail/'+item.id">     详情             </router-link>            </td>
<td>  <a href="" @click="del(item.id)"> 删除 </a> </td>

  </tr>


  </tbody>



    </table>
  </div>
</template>

<script>
export default {
  data(){

    return{
      list:[],
      filterInput:""
    }
  },
  created(){
   this.good()
  },

  methods:{
 good(){
this.$http.get("http://localhost:3004/user").then(res=>{
  this.list=res.body;
})
    
  },
  updated(){
   this.good()
  },
  del(id){
  

this.$http.delete("http://localhost:3004/user/"+id).then(res=>{     //user后面必须有个/ id   才能接上
    console.log(res);
    
})
    
  
  },search(filterInput){

    return this.list.filter(item=>{
      if(item.name.includes(filterInput)){
      return item;

     } })
    
  }
  
  }
}
</script>

<style>
   .header{

      margin-top: 80px;
 }
</style>
