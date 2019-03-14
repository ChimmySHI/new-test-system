/*
 * @Author: shijiawei 
 * @Date: 2019-03-14 14:04:30 
 * @Last Modified by: shijiawei
 * @Last Modified time: 2019-03-14 15:14:22
 */
import {View,apiAuthority,identIds,viewIdentify,usermessage} from "../utils/userMessage"
export default {

  namespace: 'example',

  state: {
    View:[],//视图权限
    Api:[],//Api权限
    identId:[],//所有用户的身份
    viewIdentifys:[],//视口权限
    users:[],//用户信息
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    //获取视图权限的type
    *getView(payload,{call,put}){
      let result=yield call(View);
      if(result.data.code==1){
        yield put({type:'saveView',View:result.data.data})
      }
    },
    //获取Api权限的type
    *getApi(payload,{call,put}){
      let res=yield call(apiAuthority);
      if(res.data.code==1){
        yield put({type:'saveApi',Api:res.data.data})
      }
    },
    //获取用户身份的type
    *getidentIds(payload,{call,put}){
      let res=yield call(identIds);
      if(res.data.code==1){
        yield put({type:'saveidentIds',identIds:res.data.data})
      }
    },
    //视口权限
    *getviewIdentify(payload,{call,put}){
      let res=yield call(viewIdentify);
      if(res.data.code==1){
        yield put({type:'saveviewIdentify',viewIdentifys:res.data.data})
      }
    },
    //用户信息
    *getusermessage(payload,{call,put}){
      let res=yield call(usermessage);
      if(res.data.code==1){
        yield put({type:'saveusermessage',users:res.data.data})
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveView(state,payload){
      return{...state,...payload}
    },
    saveApi(state,payload){
      return{...state,...payload}
    },
    saveidentIds(state,payload){
      return{...state,...payload}
    },
    saveviewIdentify(state,payload){
      return{...state,...payload}
    },
    saveusermessage(state,payload){
      return{...state,...payload}
    },
  }

};
