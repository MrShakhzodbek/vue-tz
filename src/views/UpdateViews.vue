<template>
    <form class="container" action="">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="name" >
    </div>
    <div class="mb-3">
        <label for="name" class="form-label">Cost</label>
        <input autocomplete="off" type="number" class="form-control" id="name" placeholder="Only Name" v-model="cost">
    </div>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="adress">
    </div>
    <button class="btn btn-secondary px-5 py-3" @click="toggle_category">Edit</button>

  </form>
</template>

<script setup lang="ts">

import {  ref } from 'vue'
import { useRoute } from 'vue-router'
import {useCategoryStore} from '../stores/counter'
const products = useCategoryStore()


const {toggle_category} = products

const route = useRoute()

const id = route.params.id
const name = ref(route.query.name)
const cost = ref(route.query.cost)
const adress = ref(route.query.address)




</script>

<style scoped>
label{
  font-size: 25px;
}
input{
  padding: 10px 20px;
  font-size: 20px;
}
button{
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
}
</style>