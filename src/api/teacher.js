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
export function querySubscriber(data){
    return get("teacher/query/subscriber",data)
}
export function postCourse(data){
    return post("teacher/post/course",data)
}
export function postChapter(data){
    return post("teacher/post/course/chapter",data)
}
export function postBar(data){
    return post("teacher/post/course/bar",data)
}