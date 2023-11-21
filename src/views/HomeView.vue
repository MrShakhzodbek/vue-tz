

<template>
  <div class="container">
    <table class="table rounded">
      <thead class="wrapper">
        <tr>
          <th scope="col-1">Id</th>
          <th scope="col-3">Name</th>
          <th scope="col-3">Cost</th>
          <th scope="col-4">Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products.categories" :key="index" class="item">
          <th scope="row">{{ index + 1}}</th>
          <td>{{ item.name_uz }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.address || 0 }}</td>
          <td><button class="btn btn-primary" @click="passCategories(item?.id)">Edit</button></td>
          <td><button class="btn btn-danger" @click="removeCategory(item?.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import {useCategoryStore} from '../stores/counter'

const products = useCategoryStore()

onMounted(()=>{
  products.all_categories()
})

const {pass_categories} = products
const {remove_category} = products

const passCategories = (id:number):void =>{
  pass_categories(id)
}

const removeCategory = (id:number):void =>{
  remove_category(id)
}
</script>
<style >
.table{
  /* border: 1px solid red; */
  width: 100%;  
}


td{
  font-size: 20px;
  text-align: start;
  padding: 10px ;
  text-align: center;
}
th{
  text-transform: uppercase;
  text-align: center;
  
}
tbody button{
  padding: 10px 20px;
  border: none;
  background: greenyellow;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
}
</style>


