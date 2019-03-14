import React, { Component } from "react";
import { Checkbox, Input, Button } from "antd";
import { connect } from "dva";
import style from "./IndexPage.css";
import { loginApi } from "../../utils/userMessage.js";
import { withRouter } from "react-router-dom";
// import axios from 'axios'
let mapState = store => {
  window.store = store;
  return { ...store.login };
};
// @connect(mapState)

class LoginDemo extends Component {
  state = {
    autoLogin: false,
    user_name: "w916peach",
    user_pwd: "Peach0126?",
    identity_id: ""
  };
  onSubmit = values => {
    const { history } = this.props;
    let { user_name, user_pwd } = values;
    console.log(user_name, user_pwd);
    loginApi({
      user_name: user_name,
      user_pwd: user_pwd
    }).then(res=>{
      console.log(res);
      if (res.data.code === 1) {
        window.sessionStorage.setItem(
          "userid",
          JSON.parse(res.config.data).user_name
        );
        console.log(res.config.data);
        window.sessionStorage.setItem("token", res.data.token);
        window.sessionStorage.setItem("identity_id", res.data.data);
        history.push("/home");
      }
    });
  };
  changeAutoLogin = ev => {
    this.setState({ autoLogin: ev.target.checked }, () => {
      if (this.state.autoLogin) {
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        if (!userInfo) {
          return;
        }
        let { user_name, user_pwd } = userInfo;
        this.setState({ user_name, user_pwd });
      } else {
        this.setState({ user_name: "", user_pwd: "" });
      }
    });
  };
  render() {
    let { user_name, user_pwd } = this.state;
    return (
      <div style={{ width: "30%", margin: "100px auto", minWidth: 300 }}>
        <h1 style={{ textAlign: "center" }}>请登录</h1>
        <div className={style.group}>
          <Input
            size="large"
            placeholder="请输入用户名"
            value={user_name}
            onChange={ev => this.setState({ user_name: ev.target.value })}
          />
        </div>
        <div className={style.group}>
          <Input
            type="password"
            size="large"
            placeholder="请输入用户密码"
            value={user_pwd}
            onChange={ev => this.setState({ user_pwd: ev.target.value })}
          />
        </div>
        <div className={style.group}>
          <Checkbox
            checked={this.state.autoLogin}
            onChange={ev => this.changeAutoLogin(ev)}
          >
            记住密码
          </Checkbox>
          <a style={{ float: "right" }} href="###">
            忘记密码
          </a>
        </div>
        <div>
          <Button
            onClick={() => this.onSubmit({ user_name, user_pwd })}
            block
            type="primary"
            size="large"
          >
            登录
          </Button>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(mapState)(LoginDemo));
