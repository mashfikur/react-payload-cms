import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getAllProd: builder.query({
      query: ({ limit }) => `/products?limit=${limit}`,
    }),
    getSearchProducts: builder.query({
      query: (serchTerm) => `/products/search?q=${serchTerm}`,
    }),
  }),
});

export const { useGetAllProdQuery, useGetSearchProductsQuery } = productsApi;
