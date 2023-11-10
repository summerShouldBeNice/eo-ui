import axios from 'axios'
import qs from 'qs'
import { BASE_URL } from "@/config/constants";

// axios默认配置
axios.defaults.baseURL = "/api";
// axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 1000 * 60 * 10;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.withCredentials = true

/**
 * 给axios添加请求,响应拦截器
 * @param axiosInstance
 */
function addInterceptors(axiosInstance) {

    // 请求拦截器
    axiosInstance.interceptors.request.use(config => {
        let user_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyRFRPIjoie1wiZW1haWxcIjpcIjI2OTMzODc0MTNAcXEuY29tXCIsXCJpZFwiOjMsXCJuaWNrTmFtZVwiOlwi56eL5aSpXCIsXCJwaG9uZW51bWJlclwiOlwiMTMwNTU3NzM3OFwiLFwicm9sZUxpc3RcIjpbXSxcInVzZXJuYW1lXCI6XCJhdXR1bW5cIn0iLCJleHAiOjE3MDIxMjU3OTl9.6lK1SdYurZEm0dNOybsGFlPsORSK7OFN_ULPyEp45vM"
        if (user_token){
            config.withCredentials = true
            config.headers["user_token"] = user_token
            // config.headers["Content-Type"] = "application/json"
            console.log(config.headers.get("user_token"))
            console.log(config.headers.get("Content-Type"))
        }
        // config.headers['user_token'] = user_token
        // console.log(config.headers.get("User_token"))
        return config;
    },error => {
        // 进行统一的错误提示 相当于catch
        console.log("请求发送失败:",error);
        // ElMessage("请求发送失败","错误提示");
    });

    // 响应拦截器
    axiosInstance.interceptors.response.use(resultWrapper => {
        let result = resultWrapper.data;
        console.log("resultWrapper", resultWrapper)
        // if (result.success) {
        //     return result;
        // }else {
        //     // 如果响应失败则跳转登录页面
        // }
        return result;
    },error => {
        console.log("服务器响应失败:",error);
        // ElMessage("服务器响应失败","错误提示");
        console.log("111111")
        return Promise.reject("服务器响应失败");
    })
}

/**
 * 用来发送get请求的实例
 * @type {AxiosInstance}
 */
let getInstance = axios.create();
addInterceptors(getInstance);

/**
 * 用来发送post请求的实例
 * Content-Type = application/x-www-form-urlencoded
 * @type {AxiosInstance}
 */
let formPostInstance = axios.create({
    method: "post",
    headers: {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    transformRequest: [function (data, headers){
        console.log("data:",data);
        return qs.stringify(data);
    }]
});
addInterceptors(formPostInstance);

/**
 * 用来发送post请求的实例
 * Content-Type = application/json
 * 后端接收要用@RequestBody
 * @type {AxiosInstance}
 */
let appJsonPostInstance = axios.create({
    method: "post"
});
addInterceptors(appJsonPostInstance);




/**
 * @param config
 *  {"url":"/a",params:{id:i}}｜{url:'/a?id=1'}
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function doGet(config){
    return getInstance(config);
}

/**
 * @param config
 *  {"url":"/a",data:{id:i}}
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function formPost(config){
    return formPostInstance(config);
}

/**
 * @param config
 *  {"url":"/a",data:{id:i}}
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function appJsonPost(config){
    return appJsonPostInstance(config);
}
