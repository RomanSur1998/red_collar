import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getListCategory = createAsyncThunk(
  "data/getListCategory",
  async () => {
    try {
      const response = await api.getCategory();
      return response;
    } catch (error) {
      console.error(error, "error");
    }
  }
);
export const getOneCategoryProducts = createAsyncThunk(
  "data/getOneCategoryProducts",
  async (data) => {
    try {
      const response = await api.getOneCategoryProducts(data);
      return response;
    } catch (error) {
      console.error(error, "error");
    }
  }
);
export const getProductsList = createAsyncThunk(
  "data/getProductsList",
  async (skip) => {
    try {
      const response = await api.getProducts(skip);
      return response;
    } catch (error) {
      console.error(error, "error");
    }
  }
);
export const getSearchProducts = createAsyncThunk(
  "data/getSearchProducts",
  async (data) => {
    try {
      const response = await api.getSearch(data);
      return response;
    } catch (error) {
      console.error(error, "error");
    }
  }
);
