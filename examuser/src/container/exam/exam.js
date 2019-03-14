import React, { Component } from "react";
import { Button, Select } from "antd";
import style from "./exam.css";
import Editors from "../../components/editor";
const Option = Select.Option;
export default class exam extends Component {
  render() {
    return (
      <div>
        <Editors />
        <Editors />
        <div className={style.choose}>
          <div className={style.chooseBox}>
            <span>试题选择试题类型：</span>
            <Select
              defaultValue="周考一"
              style={{ width: 120 }}
              onChange={this.handleChangeone}
            >
              <Option value="周考一">周考一</Option>
              <Option value="周考二">周考二</Option>
              <Option value="周考三">周考三</Option>
              <Option value="月考">月考</Option>
            </Select>
          </div>
          <div className={style.chooseBox}>
            <span>试题选择课程类型</span>
            <Select
              defaultValue="js"
              style={{ width: 120 }}
              onChange={this.handleChangetwo}
            >
              <Option value="js">Js</Option>
              <Option value="渐进式开发">渐进式开发</Option>
              <Option value="模块化开发">模块化开发</Option>
              <Option value="项目实战">项目实战</Option>
            </Select>
          </div>
          <div className={style.chooseBox}>
            <span>试题选择题目类型</span>
            <Select
              ref={subject => (this.subject = subject)}
              defaultValue="简答题"
              style={{ width: 120 }}
              onChange={this.handleChangethree}
            >
              <Option value="简答题">简答题</Option>
              <Option value="代码补全">代码补全</Option>
              <Option value="修改bug">修改bug</Option>
              <Option value="手写代码">手写代码</Option>
            </Select>
          </div>
        </div>
        <div className={style.subBtn}>
          <Button type="primary" onClick={this.but_add}>
            提交
          </Button>
        </div>
      </div>
    );
  }
}
