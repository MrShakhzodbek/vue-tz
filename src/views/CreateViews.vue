<template>
  <div class="container about">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="name">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Cost</label>
        <input autocomplete="off" type="number" class="form-control" id="name" placeholder="Only Name" v-model="cost">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Address</label>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="address">
      </div>
      <button class="btn btn-secondary px-5 py-3" @click="addCategory">CREATE</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import { useCategoryStore } from '../stores/counter';
import type { Category } from '../models/index';

const categoriesStore = useCategoryStore();


const name = ref<string>('');
const cost = ref<number | null>(null);
const address = ref<string>('');

const addCategory = async (): Promise<void> => {
      const newCategory: Category = {
        id: 0,
        name_uz: name.value,
        cost: cost.value || 0, 
        address: address.value,
        product_type_id: 0,
        created_date: '',
      };

       await categoriesStore.add_category(newCategory);

  
      name.value = '';
      cost.value = null;
      address.value = '';
    };

    onUnmounted(() => {
      
      name.value = '';
      cost.value = null;
      address.value = '';
    });

    


</script>

<style scoped>
label {
  font-size: 25px;
}

input {
  padding: 10px 20px;
  font-size: 20px;
}

button {
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
}
</style>