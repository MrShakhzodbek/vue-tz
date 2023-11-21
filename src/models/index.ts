export interface Category {
    id: number,
    product_type_id: number,
    name_uz: string | number,
    cost:number,
    address?: string,
    created_date: string | number
}
export interface User {
    name: string;
    cost: number | null;
    address: string;
  }