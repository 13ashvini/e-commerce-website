import React, { useEffect } from 'react'
import HomeOne from './HomeOne'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useCategoriesQuery, useFilterCategoryQuery } from '../../Service/CategoryService'
import { setIsLoading, setItems } from '../../redux/Slice/CategoriesSlice'

const HomeOneWrapper = ({}) => {
  const {items,isLoading,isError}=useSelector((state:RootState)=>(state.categories))
 const {data:categories,isLoading:isCategoriesLoading,isFetching:isCatgegoriesFetching}=useCategoriesQuery("") 
  const dispatch=useDispatch()
  console.log("it",items)
  console.log("cat",categories)

  useEffect(()=>{
      if(!isCategoriesLoading||!isCatgegoriesFetching){
        dispatch(setItems(categories))
        dispatch(setIsLoading(false))
      }else{
        dispatch(setIsLoading(true))
      }
    },[isCategoriesLoading,isCatgegoriesFetching,categories])
 
  
  return (
    <div>
   <HomeOne productsData={items}
   categoryData={items}
   isLoading={isLoading}
   

   />
    </div>
  )
}

export default HomeOneWrapper
