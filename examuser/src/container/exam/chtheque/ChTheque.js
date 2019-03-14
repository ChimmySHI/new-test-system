
import React, { Component } from "react";

import { showAdque } from "../../../utils/userMessage.js";

export default class ChTheque extends Component {
  state={
    datalist:[]
  }
  componentDidMount() {
    showAdque().then(res => {
      // console.log(res.data.data)
    this.setState({
        datalist:res.data.data
      })
    });
  }
  render() {
    let { datalist } = this.state;
    return (
      <div>
        { datalist.length && datalist.map((v,i) => {
          return <div key={i}>
            题目：
            <h2>{v.questions_stem}</h2>
            答案：
            <p>{v.questions_answer}</p>
          </div>
        })
         }
      </div>
    );
  }
}