//管理员相关的网络请求
import {get, post} from "../network/request";
export function login(data) {
    return get("admin/login",data);
}
export function getAdmin(){
    return  JSON.parse(localStorage.getItem('admin'));
}
export function queryClassAll(data){
    return get("admin/query/cclass",data)
}
export function queryCourseAll(data){
    return get("admin/query/course",data)
}
export function queryTestAll(data){
    return get("admin/query/test",data)
}
export function queryUserAll(data){
    return get("admin/query/user",data)
}
export function queryTeacherAll(data){
    return get("admin/query/teacher",data)
}
export function queryMenuAll(data){
    return get("admin/query/menu",data)
}
export function queryRuleAll(data){
    return get("teacher/query/rule",data)
}
export function queryMessageAll(data){
    return get("admin/query/notice",data)
}
export function querySliderAll(data){
    return get("admin/query/slider",data)
}