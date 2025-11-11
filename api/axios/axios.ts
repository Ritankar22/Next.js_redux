import axios from 'axios';
import { Cookies } from "react-cookie";

const adminUrl='https://crud-node-6.onrender.com';
export const baseURL = adminUrl;

const axiosInstance = axios.create({baseURL});

// jwt Authentication 
const cookie=new Cookies()
axiosInstance.interceptors.request.use(
    async function (config) {   // config is a parameter//
        // const token= localStorage.getItem("token") || sessionStorage.getItem("token");
     const token= cookie.get("token")
        if(token !== null || token!== undefined){
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    function (err){
        return Promise.reject(err);
    }
);
export default axiosInstance;