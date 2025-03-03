import axios from "axios";
const api = axios.create({
  baseURL: "https://multivendor-shop-backend-rl68.onrender.com/api",
});
export default api;
