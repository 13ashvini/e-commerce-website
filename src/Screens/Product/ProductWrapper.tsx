import React,{useState,useEffect} from 'react'
import { useGetProductByIdQuery } from '../../Service/ProductService'
import { ProductListResponse } from '../../model/Product.model'
import Product from './Product'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductWrapper = (props: Props) => {
  const {productId}=useParams()
  const [productDetail,setProductDetail]=useState<any|null>(null)
  const [isLoading,setIsloading]=useState(true)
  const {data:product,isLoading:isProductDetailLoading,isFetching:isProductDetailFetching}=useGetProductByIdQuery(productId)
  useEffect(()=>{
 if(!isProductDetailLoading ||!isProductDetailFetching){
  setProductDetail(product || null )
  setIsloading(false)
 }else{
  setIsloading(true)
 }
  },[isProductDetailLoading,isProductDetailFetching,product])
  console.log("productDetail",product)
  console.log("prod",productDetail)
  return (
    <div>
      <Product 
      productDetail={productDetail}
      isLoading={isLoading}
      />
    </div>
  )
}

export default ProductWrapper