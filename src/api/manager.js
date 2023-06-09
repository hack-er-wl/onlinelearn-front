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
export function queryChapterAll(data){
    return get("admin/query/chapter",data)
}
export function queryBarAll(data){
    return get("admin/query/bar",data)
}
export function queryTestAll(data){
    return get("admin/query/test",data)
}
export function queryOrderAll(data){
    return get("admin/query/order",data)
}
export function queryChooseAll(data){
    return get("admin/query/choose",data)
}
export function queryOptionAll(data){
    return get("admin/query/option",data)
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
export function addField(data) {
    return post("admin/post/cfield", data);
}
export function addMenu(data) {
    return post("admin/insert/menu", data);
}
export function addSlider(data) {
    return post("admin/insert/slider", data);
}
export function addAvatar(data) {
    return post("admin/insert/avatar", data);
}
export function queryFields(data){
    return get("admin/query/cfield")
}
export function addRule(data) {
    return post("admin/post/rule", data);
}
export function broadNotice(data) {
    return post("admin/broad", data);
}
export function handleUpdateTeacher(data) {
    return post("admin/update/teacher/status", data);
}
export function handleUpdateCourse(data) {
    return post("admin/update/course/check", data);
}
export function handleUpdateCourseStatus(data) {
    return post("admin/update/course/status", data);
}
export function handleUpdateClass(data) {
    return post("admin/update/class/status", data);
}
export function handleUpdateRule(data) {
    return post("admin/update/rule", data);
}
export function handleDeleteRule(data) {
    return post("admin/delete/rule", data);
}
export function queryRuleAll(data){
    return get("admin/query/rule",data)
}
export function queryMessageAll(data){
    return get("admin/query/notice",data)
}
export function querySliderAll(data){
    return get("admin/query/slider",data)
}
export function queryAvatarAll(data){
    return get("admin/query/avatar",data)
}