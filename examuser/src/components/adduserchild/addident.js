import React, { Component } from 'react'
import { Radio, Input, Button} from "antd";
import {connect} from 'dva'
import style from '../../container/user/adduser/Adminis.css'
import {withRouter} from 'react-router-dom'
import { identId} from "../../utils/userMessage";
let mapState = store => {
  window.store = store;
  return {...store.login}
}
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identitytext:''
    };
    }
  ident_but=()=>{
    let{identitytext}=this.state
    identId({
      identity_text:identitytext
    }).then(res=>{
      console.log(res)
    })
  }
  render () {
    return (
      <div className={style.Adm_min}>
      <div>
        <Radio.Group>
          <Radio.Button value="添加身份">添加身份</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Input  onChange={ev => {
            this.setState({ identitytext: ev.target.value });
          }} placeholder="请输入身份名称" />
      </div>
      <div>
        <Button onClick={this.ident_but} type="primary">确定</Button>
        <Button>重置</Button>
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapState)(componentName))