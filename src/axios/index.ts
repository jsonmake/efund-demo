
//监控请求
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { App, inject } from 'vue';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

// export function getmonitor():any[]{
//     console.log('网络请求监控数据')
//     return[
//         {code:'1083',name:'易方达中证ETF联接'}
//     ]
// }

const http:AxiosInstance = axios.create();

http.interceptors.request.use(
    function(config:AxiosRequestConfig){
        return config;
    },
    function(err:Error){
        return Promise.reject(err)
    }
)
http.interceptors.response.use(
    function(response:AxiosResponse){
        return response
    },
    function(err:Error){
        return Promise.reject(err)
    }
)


const axiosName = Symbol();
//注册到vue的install方法
export default function axiosInstall(vue:App){
    vue.config.globalProperties.$axios = http;
    vue.provide<AxiosInstance>(axiosName,http);
}

export function useAxios():AxiosInstance{
    return inject<AxiosInstance>(axiosName)!;
}

//泛型hooks方法
export function useRequest<D=any,Res=any>(
        url:string,data:D,type:Method
):AxiosPromise<Res>{
    const http = useAxios();
    return http({
        url,
        data:data || {},
        method:type
    })
}