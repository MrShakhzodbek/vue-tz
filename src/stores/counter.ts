import { ref } from 'vue'
import { defineStore } from 'pinia'
import {url} from './vars'
import axios from 'axios'
import { useRouter } from 'vue-router'
import type { Category } from '@/models'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])
  const router = useRouter()

  const all_categories = async (): Promise<void>=>{
    let result = await axios.get(`${url}`)
    if(result.status == 200){
      categories.value = [...result.data]
    }
  }

  const pass_categories = async(id:number):Promise<void>=>{
    const singleData = categories.value.find((el) => el.id === id)
    router.push({
      path: `update/${id}`,
      query: {
        name: singleData?.name_uz,
        cost: singleData?.cost,
        address: singleData?.address
      }
    })
  }
  const remove_category = async (id:number):Promise<void>=>{
    let result = await axios.delete(`${url}/${id}`)
    if(result.status == 200){
        categories.value = categories.value.filter((category:Category)=>{
            return category.id !== id
        })
    }
  }
  
  const add_category = async (newCategory: Category) : Promise<void> =>{
    const payload = {
      product_type_id: 0,
      name_uz: newCategory.name_uz,
      cost: newCategory.cost,
      address: newCategory.address,
      created_date: new Date().toString(),
    };
    let result = await axios.post(`${url}`, payload)
    if (result.status == 200){
        categories.value = [result.data, ...categories.value]
    }
  }
  const toggle_category = async (category: Category): Promise<void>=>{
    
    const updatedCategory  = {
      product_type_id: 0,
      id:category.id,
      name_uz: category.name_uz,
      cost: category.cost,
      address: category.address,
      created_date: new Date().toString(),
    };
    let result = await axios.put(`${url}/${category.id}`, updatedCategory)
}

  return{
    categories,
    all_categories,
    pass_categories,
    remove_category,
    toggle_category,
    add_category
  }
})
