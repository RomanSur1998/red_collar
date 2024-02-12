import axios from "axios";

const API = "https://dummyjson.com/products";

export const configAxios = axios.create({
  baseURL: API,
});
