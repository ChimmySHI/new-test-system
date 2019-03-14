import React, { Component } from "react";
import style from "./showuser.css";
import { usermessage } from "../../../utils/userMessage.js";
import { Table } from "antd";
const { Column } = Table;

export default class Showuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "large",
      arr: []
    };
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  componentWillMount(){
    usermessage().then(res => {
      this.setState({
        arr: res.data.data
      });
    });
  }
  render() {
    const { arr } = this.state;
    return (
      <div className={style.wrap}>
        <div className={style.tip}>
          <span>用户管理</span>
          <span>/</span>
          <span>用户展示</span>
        </div>
        <section className={style.section}>
          <div className="tab" />
          <h1 className={style.h1}>用户数据</h1>
          <div className={style.table}>
            <Table dataSource={arr} rowKey='user_id'>
              <Column
                title="身份"
                dataIndex="identity_text"
                key="identity_text"
              />
              <Column title="用户ID" dataIndex="user_id" key="user_id" />
              <Column title="用户名" dataIndex="user_name" key="user_name" />
              <Column title="密码" dataIndex="user_pwd" key="user_pwd" />
            </Table>
          </div>
        </section>
      </div>
    );
  }
}
