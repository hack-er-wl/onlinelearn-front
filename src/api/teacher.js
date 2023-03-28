//讲师相关的网络请求
import {get, post} from "../network/request";
export function checkTeacher(data){
    return get("teacher/check",data)
}
export function queryCourseTeacher(data){
    return get("teacher/query/course",data)
}
export function queryRules(data){
    return get("teacher/query/rule",data)
}