import { create } from "zustand"
import axios from "axios"

const BASE_URL = "http://localhost:8000/api/v1"

interface ProductStore {
  products: any[]
  loading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  fetchProductById?: (id: string) => Promise<any>
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })
    try {
      const response = await axios.get(`${BASE_URL}/store/products/getallstoreproducts`)
      set({ products: response.data.data, loading: false })
    } catch (error: any) {
      set({ error: error.message, loading: false })
    }
  },
}))

export default useProductStore
