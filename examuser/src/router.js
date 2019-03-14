
import React from "react";
import { Router, Switch} from "dva/router";
// import IndexPage from './routes/IndexPage';
import Routerview from "./components/router-view";
import RouterConfigs from "./router/router";
import "antd/dist/antd.css";
import {createBrowserHistory as BrowserHistory} from "history"
function RouterConfig() {
  return (
    <Router history={BrowserHistory()}>
      <Switch>
        <Routerview childRoutes={RouterConfigs} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
