import axios from "axios";


axios.interceptors.request.use((config)=>{
  const token = window.sessionStorage.getItem("token");
    if(token){
      config.headers={
        authorization:token,
      }
    }
  return config
})
export function loginApi(loginInfo) {
  return axios.post("/api/user/login", {
    ...loginInfo
  });
}

//获取用户信息
export function usermessage() {
  // const token = window.sessionStorage.getItem("token");
  return axios.get("/api/user/user");
}
//获取用户身份
export function identity() {
  // const token = window.sessionStorage.getItem("token");
  return axios.get("/api/user/identity");
}
//添加用户
export function addusers(userinfo){
  return axios.post('/api/user',userinfo)
}
//获取用户信息
export function userinfo(){
  return axios.get('/api/user/userInfo')
}
//更新试题
export function upquestions(opt){
  return axios.post('/api/exam/questions',opt)
}
//更新身份
export function uploadinfo(opt){
  return axios.put('/api/user/user',opt)
}
//获取身份id
export function identId(opt){

  return axios.get('/api/user/identity/edit',opt)
}
//api权限添加
export function addapiurl(opt){
  return axios.get('/api/user/authorityApi/edit',opt)
}
//添加身份
export function apiauth(){
  return axios.get('/api/user/api_authority')
}
//添加视图接口权限
export function viewIdentId(opt){
  return axios.get('/api/user/new',opt)
}
//获取所有用户身份
export function  identIds() {
  return axios.get('/api/user/identity')
}
//所有api权限
export function apiAuthority(){
  return axios.get('/api/user/api_authority')
}
// 给身份设置API权限
export function identIdApi(opt){
  return axios.post('/api/user/setIdentityApi',opt)
}
//给用户设置视图权限
export function setView(opt){
  return axios.post('/api/user/setIdentityView',opt)
}
//视图权限
export function View(){
  return axios.get("/api/user/identity_view_authority_relation")
}
//获取视口权限
export function viewIdentify(){
  return axios.get('/api/user/view_authority')
}
//获取所有试题
export function showAdque(){
  return axios.get('/api/exam/questions/new')
}