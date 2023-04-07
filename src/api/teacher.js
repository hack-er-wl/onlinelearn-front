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
export function postTest(data){
    return post("teacher/post/test",data)
}
export function postChoose(data){
    return post("teacher/post/choose",data)
}
export function postOption(data){
    return post("teacher/post/option",data)
}
export function queryTestByTeacher(data){
    return post("teacher/query/test",data)
}