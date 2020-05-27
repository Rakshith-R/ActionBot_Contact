/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import A from 'index1.js';
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "./material-dashboard-react.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/home" component={A} />

      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
