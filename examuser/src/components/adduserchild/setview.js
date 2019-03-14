import React, { Component } from 'react'
import { Radio, Select, Button } from "antd";
import {connect} from 'dva'
import style from '../../container/user/adduser/Adminis.css'
import {withRouter} from 'react-router-dom'
import { setView} from "../../utils/userMessage";
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return { ...store.example};
}
class Setview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views:'',
      iden:''
    };
    }
    keyidentity=(val)=>{
      this.setState({
        iden:val.key
      })
    }
    keyview=(vals)=>{
      this.setState({
        views:vals.key
      })
    }
    view=()=>{
      const {iden,views}=this.state    
      setView({
        identity_id:iden,
        view_authority_id:views
      }).then(res=>{
        alert(res.data.msg)
      })
    }
  render () {
    const {View,identIds}=this.props
    return (
      <div className={style.Adm_min}>
      <div>
        <Radio.Group>
          <Radio.Button value="给身份设置视图权限">
            给身份设置视图权限
          </Radio.Button>
        </Radio.Group>
      </div>
      <Select
        labelInValue
        defaultValue={{ key: "选择身份" }}
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
        defaultValue={{ key: "选择视图权限ID" }}
        style={{ width: 200 }}
        onChange={this.keyview}
      >
       {
        View.length&&View.map((item,index)=>{
          return <Option key={index} value={item.identity_view_authority_relation_id}>{item.view_authority_text}</Option>
        })
        }
      </Select>
      <div>
        <Button type="primary" onClick={this.view}>确定</Button>
        <Button>重置</Button>
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapState)(Setview))