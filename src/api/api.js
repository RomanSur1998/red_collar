import { configAxios } from "../config";

export const api = {
  getProducts: async (skip) => {
    try {
      const response = await configAxios.get(`?limit=${skip != 0 ? skip : 8}`);
      return response;
    } catch (error) {}
  },
  getOneCategoryProducts: async (categoty) => {
    try {
      const response = await configAxios.get(`/category/${categoty}`);
      return response;
    } catch (error) {}
  },
  getCategory: async () => {
    try {
      const response = await configAxios.get("/categories");
      return response;
    } catch (error) {}
  },
  getSearch: async (params) => {
    try {
      const response = await configAxios.get(
        `https://dummyjson.com/products/search?q=${params}`
      );
      return response;
    } catch (error) {}
  },
};
