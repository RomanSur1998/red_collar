import { createSlice } from "@reduxjs/toolkit";
import {
  getListCategory,
  getOneCategoryProducts,
  getProductsList,
  getSearchProducts,
} from "../actions/DataActions";
import { addProductToLoaclStorage } from "../../helpers/cartHelper";
import { calcSubPrice, calcTotalPrice } from "../../helpers/cartFunctions";

const initialState = {
  category: "all",
  productsLists: [],
  status: false,
  search: "",
  categoryList: [],
  skipConuter: 0,
  total: null,
  modal: false,
  cart: {
    products: [],
    totalPrice: 0,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSkip(state, action) {
      state.skipConuter = state.skipConuter += 8;
    },
    setModal(state, action) {
      state.modal = !state.modal;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneCategoryProducts.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(getOneCategoryProducts.fulfilled, (state, action) => {
      state.productsLists = action.payload.data?.products;
      state.status = false;
    });

    builder.addCase(getProductsList.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.productsLists = action.payload.data?.products;
      state.total = action.payload.data.total;
      state.status = false;
    });
    builder.addCase(getSearchProducts.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(getSearchProducts.fulfilled, (state, action) => {
      state.productsLists = action.payload.data?.products;
      state.status = false;
    });

    builder.addCase(getListCategory.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
  },
});

export const {
  setCategory,
  setSearch,
  setSkip,
  setModal,
  setCart,
  addProductInCart,
  changeProductCount,
} = dataSlice.actions;
export default dataSlice.reducer;
