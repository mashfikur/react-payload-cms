import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 30,
  skip: 0,
  displayProducts: [],
  selectedCategory: "",
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      return {
        ...state,
        limit: action.payload,
      };
    },
    setSkip: (state, action) => {
      return {
        ...state,
        skip: action.payload,
      };
    },

    setDisplayProducts: (state, action) => {
      return {
        ...state,
        displayProducts: action.payload,
      };
    },
    setCategory: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    },
  },
});

export const { setLimit, setSkip, setDisplayProducts,setCategory } = productSlice.actions;

export default productSlice.reducer;
