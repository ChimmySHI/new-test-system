import React, { Component } from 'react'
import { Radio, Button,Select } from "antd";
import {connect} from 'dva'
import style from '../../container/user/adduser/Adminis.css'
import {withRouter} from 'react-router-dom'
import { identIds,apiAuthority,identIdApi} from "../../utils/userMessage";
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return { ...store.example };
}
class Setupapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api:'',
      iden:''
    };
    }
    componentDidMount(){
       identIdApi().then(res=>{
        this.setState({
          apiAuthoritys:res.data.data
        })
      })
    }
    keyidentity=(val)=>{
      this.setState({
        iden:val.key
      })
    }
     keyapiAuthority=(value)=>{
      this.setState({
        api:value.key
      })
    }
    apiAuthority=()=>{
      const {iden,api}=this.state    
      identIdApi({
       identity_id:iden,
       api_authority_id:api
      }).then(res=>{
        console.log(res)
        alert(res.data.msg)
      })
     }
  render () {
    const {Api,identIds}=this.props
    return (
      <div className={style.Adm_min}>
      <div>
        <Radio.Group>
          <Radio.Button value="给身份设置api接口权限">
            给身份设置api接口权限
          </Radio.Button>
        </Radio.Group>
      </div>
      <Select
        labelInValue
        defaultValue={{ key: "选择身份ID" }}
        style={{ width: 200 }}
        onChange={this.keyidentity}
      >
       {
        identIds.length&&identIds.map((item,index)=>{
          return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
        })
       }
      </Select>
      <Select
        labelInValue
        defaultValue={{ key: "选择api接口权限" }}
        style={{ width: 200 }}
        onChange={this.keyapiAuthority}
      >
        {
          Api.length&&Api.map((item,index)=>{
            return <Option key={index} value={item.api_authority_id}>{item.api_authority_text}</Option>
          })
        }
      </Select>
      <div>
        <Button type="primary" onClick={this.apiAuthority}>确定</Button>
        <Button>重置</Button>
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapState)(Setupapi))