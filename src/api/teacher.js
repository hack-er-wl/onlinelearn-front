//讲师相关的网络请求
import {get, post} from "../network/request";
export function checkTeacher(data){
    return get("teacher/check",data)
}