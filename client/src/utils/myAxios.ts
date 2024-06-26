import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const instanceAxios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 100000,
});

export default instanceAxios;
