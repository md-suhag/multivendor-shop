import axios from "axios";
const local = "https://multivendor-shop-backend-rl68.onrender.com";
const production = "";
const api = axios.create({
  baseURL: `${local}/api`,
  withCredentials: true,
});
export default api;
