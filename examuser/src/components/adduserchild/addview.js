import React, { Component } from 'react'
import { Radio, Select, Button } from "antd";
import {connect} from 'dva'
import style from '../../container/user/adduser/Adminis.css'
import {withRouter} from 'react-router-dom'
import { setView,userinfo} from "../../utils/userMessage";
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return { ...store.example };
}
class Addview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity_id:'',
      view_authority_id:''
    };
    }
    componentDidMount(){
      userinfo().then(res=>{
        this.setState({
          identity_id:res.data.data.identity_id
        })
      })
    }
    handleChoose = val =>{
      console.log(val);
      this.setState({
        view_authority_id:val.key
      })
    }
    suerId=()=>{
      let { identity_id,view_authority_id } = this.state;
      setView({
        identity_id,
        view_authority_id
      }).then(res=>{
        console.log(res)
      })
    }
  render () {
    const {View}=this.props
    return (
      <div className={style.Adm_min}>
            <div>
              <Radio.Group>
                <Radio.Button value="添加视图接口权限" >
                  添加视图接口权限
                </Radio.Button>
              </Radio.Group>
            </div>
            <Select
              labelInValue
              defaultValue={{ key: "选择已有视图" }}
              style={{ width: 200 }}
              onChange={this.handleChoose}
            >
               {
              View.length && View.map((v,i)=>{
                return <Option key={i} value={v.identity_view_authority_relation_id}>{v.view_authority_text}</Option>
              })
            }
            </Select>
            <div>
              <Button type="primary" onClick={this.suerId}>确定</Button>
              <Button>重置</Button>
            </div>
      </div>
    )
  }
}

export default withRouter(connect(mapState)(Addview))