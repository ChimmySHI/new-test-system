import React, { Component } from 'react'
import { Radio, Input, Select, Button, Popconfirm, message } from "antd";
import {connect} from 'dva'
import style from '../../container/user/adduser/Adminis.css'
import {withRouter} from 'react-router-dom'
import { addusers,uploadinfo,usermessage} from "../../utils/userMessage";
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return { ...store.example };
}
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",//添加用户名
      password: "",//添加用户密码
      size: "添加用户",//
      user_id: "",//身份id
      msg: "",//返回信息
      code: "",//返回状态码
      userlist:[],//用户列表
    };
    }
    
  cancel = e => {
    message.error("添加失败");
  };
  confirm =(code)=>{
    console.log(code)
    if(code==='1'){
      message.success(this.state.msg);
    }else if(code==='0'){
      message.error(this.state.msg);
    }
  };
  butadduer(code){
   this.confirm
  }
  userChange=value=>{
    this.setState({
      userID: value.key
    });
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
    console.log(e.target.value);
  };
  componentDidMount(){
    usermessage().then(res=>{
      console.log(res)
      this.setState({
        userlist:res.data.data
      })
    })
  }
  adduser = () => {
    let{
      size,
      userName,
      password,
      user_id,
      userID
    }=this.state
    console.log(userName, password, user_id,size);
    if(size==='添加用户'){//判断添加用户
      addusers({
        user_name: userName,
        user_pwd: password,
        identity_id: user_id
      }).then(res => {
        this.setState({
          msg: res.data.msg,
          code: res.data.code
        });
        
      });
      usermessage().then(res=>{
        console.log(res)
        this.setState({
          userlist:res.data.data
        })
      })
    }else if(size==='更新用户'){//判断是否更新用户
      uploadinfo({
        user_id:userID,
        user_name:userName,
        user_pwd:password,
        identity_id:user_id
      }).then(res=>{
        this.setState({
          msg: res.data.msg,
          code: res.data.code
        });
      })
       usermessage().then(res=>{
      console.log(res)
      this.setState({
        userlist:res.data.data
      })
    })
    }
  };
  render () {
    const { size, userName, password,code} = this.state;
    const {users}=this.props
    return (
      <div className={style.Adm_min}>
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="添加用户">添加用户</Radio.Button>
          <Radio.Button value="更新用户">更新用户</Radio.Button>
        </Radio.Group>
      </div>
      {size && size !== "添加用户" ? (
        <Select
          labelInValue
          defaultValue={{ key: "请选择身份ID" }}
          style={{ width: 200 }}
          onChange={this.userChange}
        >
          {
            users.length>0&&users.map((item,i)=>{
              return <Option key={i} value={item.user_id}>{item.user_name}</Option>
            })
          }
        </Select>
      ) : null}
      <div>
        <Input
          value={userName}
          onChange={ev => {
            this.setState({ userName: ev.target.value });
          }}
          placeholder="请输入用户名"
        />
        <Input
          value={password}
          onChange={ev => {
            this.setState({ password: ev.target.value });
          }}
          placeholder="请输入密码"
        />
      </div>
      <div>
        <Select
          labelInValue
          defaultValue={{ key: "请选择身份ID" }}
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          <Option value="63no9p-8y0k4">管理员</Option>
          <Option value="uf81yn-hv8uvv">出题者</Option>
        </Select>
      </div>
      <div>
        <Popconfirm
          title="你确定要添加用户吗?"
          onConfirm={this.confirm.bind(this,code)}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" onClick={this.adduser}>
            确定
          </Button>
        </Popconfirm>
        ,<Button>重置</Button>
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapState)(componentName))