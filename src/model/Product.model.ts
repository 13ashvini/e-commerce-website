export type ProductListResponse ={
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: CategoryDetail
  }
  
  export type CategoryDetail = {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }