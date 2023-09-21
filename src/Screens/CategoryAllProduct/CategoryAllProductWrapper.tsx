import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByCategoryQuery } from "../../Service/ProductService";
import {
  setCurrentPage,
  setIsLoading,
  setItems,
  setRowsPerPage,
  setTotalItems,
} from "../../redux/Slice/CategoryPorductSlice";
import CategoryAllProduct from "./CategoryAllProduct";
import { useParams } from "react-router-dom";

type Props = {};

const CategoryAllProductWrapper = (props: Props) => {
  const dispatch = useDispatch();
  const { products } = useParams();
  const { items, isLoading, rowsPerPage, totalItems, currentPage } =
    useSelector((state: RootState) => state.categoryProduct);
  const { data: productsData, isLoading: isProductsLoading } =
    useGetProductByCategoryQuery({
      id: products,
      offset: (currentPage - 1) * rowsPerPage,
      limit: -1,
    });
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const productsForCurrentPage = items.slice(startIndex, endIndex);
  useEffect(() => {
    if (!isProductsLoading) {
      dispatch(setIsLoading(false));
      dispatch(setItems(productsData || []));
      dispatch(setTotalItems(items.length || 0));
    }
  }, [isProductsLoading, products, dispatch, productsData, items]);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  console.log("totalitem", totalItems);
  console.log("proddddu", productsData);
  console.log("rows,", rowsPerPage);
  console.log("page", currentPage);
  return (
    <div>
      <CategoryAllProduct
        productsData={productsForCurrentPage || []}
        pagination={{
          page: currentPage,
          count: totalPages,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
};

export default CategoryAllProductWrapper;
