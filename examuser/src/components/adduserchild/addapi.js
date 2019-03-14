import React, { Component } from 'react'
import { Radio, Input, Button } from "antd";
import {connect} from 'dva'
import style from '../../container/user/adduser/Adminis.css'
import {withRouter} from 'react-router-dom'
import { addapiurl} from "../../utils/userMessage";
let mapState = store => {
  window.store = store;
  return {...store.login}
}
class componentNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiName:'',
      apiUrl:'',
      apiMethod:''
    };
    }
    addapi=()=>{
      let {
        apiName,
        apiUrl,
        apiMethod
      }=this.state
      addapiurl({
        "api_authority_text":JSON.stringify(apiName),
        "api_authority_url":JSON.stringify(apiUrl),
        "api_authority_mehtod":JSON.stringify(apiMethod)
      }).then(res=>{
        console.log(res)
      })
    }
  render () {
    return (
      <div className={style.Adm_min}>
      <div>
        <Radio.Group>
          <Radio.Button value="添加api接口权限">
            添加api接口权限
          </Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Input
          onChange={ev => {
            this.setState({ apiName: ev.target.value });
          }}
          placeholder="请输入api接口权限名称" />
        <Input 
          onChange={ev => {
            this.setState({ apiUrl: ev.target.value });
          }}
          placeholder="请输入api接口权限URL" />
          <Input 
          onChange={ev => {
            this.setState({ apiMethod: ev.target.value });
          }}
          placeholder="请输入api接口权限方法" />
      </div>
      <div>
        <Button onClick={this.addapi} type="primary">确定</Button>
        <Button>重置</Button>
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapState)(componentNames))