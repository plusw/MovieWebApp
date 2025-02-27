import axios from "axios";
import queryString from "query-string";
import apiConfig from "./ApiConfig";
const ApiClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});
export default ApiClient;
