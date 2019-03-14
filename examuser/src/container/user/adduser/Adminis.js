import React, { Component } from "react";
import { connect } from "dva";
import style from "./Adminis.css";
import { withRouter } from "react-router-dom";
import Adduser from '../../../components/adduserchild/addid.js';
import Addident from '../../../components/adduserchild/addident.js';
import Addapi from '../../../components/adduserchild/addapi.js';
import Setupapi from '../../../components/adduserchild/setupapi.js';
import Setview from '../../../components/adduserchild/setview.js';
import Addview from '../../../components/adduserchild/addview.js';
let mapState = store => {
  window.store = store;
  return { ...store.login };
};
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    return (
      <div className={style.wrap}>
        <div className={style.tip}>
          <span>用户管理</span>
          <span>/</span>
          <span>用户展示</span>
        </div>
        <div className={style.Adm}>
          <Adduser />
          <Addident />
          <Addapi />
          <Addview />
          <Setupapi />
          <Setview />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapState)(componentName));
