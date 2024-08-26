import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 30,
  skip: 0,
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
  },
});

export const { setLimit, setSkip } = productSlice.actions;

export default productSlice.reducer;
