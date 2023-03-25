//管理员相关的网络请求
import {get, post} from "../network/request";
export function queryClassAll(data){
    return get("admin/query/cclass",data)
}
export function queryCourseAll(data){
    return get("admin/query/course",data)
}
export function queryUserAll(data){
    return get("admin/query/user",data)
}
export function queryTeacherAll(data){
    return get("admin/query/teacher",data)
}
export function queryMessageAll(data){
    return get("admin/query/notice",data)
}
export function querySliderAll(data){
    return get("admin/query/slider",data)
}