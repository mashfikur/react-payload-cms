import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getAllProd: builder.query({
      query: ({ limit, skip, category }) => {
        if (!category) {
          return `/products?limit=${limit}&skip=${skip}`;
        } else {
          return `/products/category/${category}?limit=${limit}&skip=${skip}`;
        }
      },
    }),
    getSearchProducts: builder.query({
      query: (serchTerm) => `/products/search?q=${serchTerm}`,
    }),
    getAllCategoryList: builder.query({
      query: () => `/products/category-list`,
    }),
  }),
});

export const {
  useGetAllProdQuery,
  useGetSearchProductsQuery,
  useGetAllCategoryListQuery,
} = productsApi;
