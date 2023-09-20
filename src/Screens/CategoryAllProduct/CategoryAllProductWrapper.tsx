import React ,{useEffect} from 'react'
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductByCategoryQuery } from '../../Service/ProductService'
import { setIsLoading, setItems, setRowsPerPage } from '../../redux/Slice/CategoryPorductSlice'
import CategoryAllProduct from './CategoryAllProduct'
import { useParams } from 'react-router-dom'

type Props = {}

const CategoryAllProductWrapper = (props: Props) => {
    const dispatch=useDispatch()
    const {products} =useParams()
    console.log("id",products)
    const {items,page,isLoading,rowsPerPage,totalItems}=useSelector((state:RootState)=>state.categoryProduct)
    const {data:productsData,isLoading:isProductsLoading,isFetching:IsProductsFetching}=useGetProductByCategoryQuery({id:products,offset:page,limit:rowsPerPage})
    console.log("prodddd",productsData)
    useEffect(()=>{
        if(!isProductsLoading ||!IsProductsFetching){
           dispatch( setIsLoading(false))
            dispatch(setItems(productsData|| []))
        }else{
            dispatch(setIsLoading(true))
        }
         },[isProductsLoading,IsProductsFetching,products])
  return (
    <div>
        <CategoryAllProduct productsData={items}
      pagination={{
        page:page ,
    count:rowsPerPage ,
    onChange:(values)=>{
        dispatch(setRowsPerPage(values.target.values))
    }
    }}
        />
    </div>
  )
}

export default CategoryAllProductWrapper