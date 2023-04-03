//用户相关的网络请求
import {get, post} from "../network/request";

/**
 * @description: 用户登录
 */
export function login(data) {
    return post("user/login",data);
}
/**
 * @description: 菜单
 */
export function handleMenu(data) {
    return get("menu/query",data);
}
/**
 * @description: 获取验证码
 */
export function code(data) {
    return get("user/email",data);
}
/**
 * @description: 用户注册
 */
export function regist(data) {
    return post("user/regist",data);
}
/**
 * @description: 获取用户信息
 */
export function getUser(){
    return  JSON.parse(localStorage.getItem('user'));
}
/**
 * @description: 获取轮播图
 */
export function getSliders(data) {
    return get("user/query/slider", data);
}
export function queryFields(data){
    return get("user/query/cfield")
}
export function queryClassesByStatus(data){
    return get("user/query/cclass/status",data)
}
export function queryCourseByStatus(data){
    return get("user/query/course/bystatus",data)
}
export function queryCourseByCourseId(data){
    return get("user/query/course/bycourseid",data)
}
export function queryCourseByClassId(data){
    return get("user/query/course/byclassid",data)
}
export function queryCourseByClassName(data){
    return get("user/query/course/byclassname",data)
}
export function queryTeacherByCourseId(data){
    return get("user/query/teacher",data)
}
export function queryCollect(data){
    return get("user/query/collect",data)
}
export function addCollect(data){
    return post("user/collect",data)
}
export function cancelCollect(data){
    return post("user/cancel/collect",data)
}
export function subscribeCourse(data){
    return post("user/subscribe",data)
}
export function cancelSubscribeCourse(data){
    return post("user/cancel/subscribe",data)
}
export function querySubscribeCourse(data){
    return get("user/query/subscribe",data)
}
export function postAssess(data){
    return post("user/assess",data)
}
export function queryAssessPoint(data){
    return get("user/query/assess/point",data)
}
export function queryReplyPoint(data){
    return get("user/query/reply/point",data)
}
export function assessPoint(data){
    return post("user/point/assess",data)
}
export function replyPoint(data){
    return post("user/point/reply",data)
}
export function cancelAssessPoint(data){
    return post("user/cancel/assess/point",data)
}
export function cancelReplyPoint(data){
    return post("user/cancel/reply/point",data)
}
export function queryAssess(data){
    return get("user/query/assess",data)
}
export function queryChapter(data){
    return get("user/query/chapter",data)
}
export function queryTests(data){
    return get("user/query/test",data)
}
export function queryRanks(data){
    return get("user/query/rank",data)
}
export function postReply(data){
    return post("user/reply",data)
}
export function queryRecommend(data){
    return get("user/query/course/recommend",data)
}
export function postApply(data){
    return post("user/apply",data)
}
export function queryMyCollect(data){
    return get("user/query/collect/byuid",data)
}
export function queryMySubCourse(data){
    return get("user/query/subscribe/course",data)
}
export function queryMyOrder(data){
    return get("user/query/order",data)
}
export function postUserInfo(data){
    return post("user/update",data)
}
export function updatePass(data){
    return post("user/update/password",data)
}
export function queryNotices(data){
    return get("user/query/notice",data)
}
export function setAccept(data){
    return post("user/notice/set",data)
}