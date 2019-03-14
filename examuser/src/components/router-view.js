
import React, { Component } from "react";
import { Route, Switch, Redirect } from "dva/router";
import UtilGlobal from "./global";
class RouterView extends Component {
  render() {
    let { childRoutes } = this.props;
    return (
      <Switch>
        {childRoutes &&
          childRoutes.map((item, key) => {
            let View = item.component;
            return (
              <Route
                key={key}
                path={item.path}
                render={props => {
                  UtilGlobal.history = props.history;
                  return <View />;
                }}
              />
            );
          })}
        <Route
          path="/"
          component={() => {
            return <Redirect to="/login" />;
          }}
          exact
        />
      </Switch>
    );
  }
}
export default RouterView;
