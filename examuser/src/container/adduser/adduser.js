import React, { Component } from "react";
import { Form, Input, Select, Button,message } from "antd";
import { adduser } from "../../utils/userMessage.js";
const Option = Select.Option;
export default class submitUSER extends Component {
  state={
    data:[]
  }
  componentDidMount() {
    adduser().then(res => {
      // console.log(res)
    this.setState({
        data:res.data.data
      })
    });
  }
  render() {
    const {data} = this.state;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    function handleBlur() {
      console.log("blur");
    }

    function handleFocus() {
      console.log("focus");
    }
    return (
      <div>
        <Select key="0"
          showSearch
          style={{ width: 200 }}
          placeholder="身份信息"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >{
           data.map(item=>{
            return  <Option value="item.identity_id">item.identity_text</Option>
          })
        }
        </Select>
        
      </div>
    );
  }
}
