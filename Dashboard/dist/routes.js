"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dashboard = require("@material-ui/icons/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Person = require("@material-ui/icons/Person");

var _Person2 = _interopRequireDefault(_Person);

var _LibraryBooks = require("@material-ui/icons/LibraryBooks");

var _LibraryBooks2 = _interopRequireDefault(_LibraryBooks);

var _BubbleChart = require("@material-ui/icons/BubbleChart");

var _BubbleChart2 = _interopRequireDefault(_BubbleChart);

var _LocationOn = require("@material-ui/icons/LocationOn");

var _LocationOn2 = _interopRequireDefault(_LocationOn);

var _Notifications = require("@material-ui/icons/Notifications");

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Unarchive = require("@material-ui/icons/Unarchive");

var _Unarchive2 = _interopRequireDefault(_Unarchive);

var _Language = require("@material-ui/icons/Language");

var _Language2 = _interopRequireDefault(_Language);

var _Dashboard3 = require("./views/Dashboard/Dashboard.js");

var _Dashboard4 = _interopRequireDefault(_Dashboard3);

var _UserProfile = require("./views/UserProfile/UserProfile.js");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _TableList = require("./views/TableList/TableList.js");

var _TableList2 = _interopRequireDefault(_TableList);

var _Typography = require("./views/Typography/Typography.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _Icons = require("./views/Icons/Icons.js");

var _Icons2 = _interopRequireDefault(_Icons);

var _Maps = require("./views/Maps/Maps.js");

var _Maps2 = _interopRequireDefault(_Maps);

var _Notifications3 = require("./views/Notifications/Notifications.js");

var _Notifications4 = _interopRequireDefault(_Notifications3);

var _UpgradeToPro = require("./views/UpgradeToPro/UpgradeToPro.js");

var _UpgradeToPro2 = _interopRequireDefault(_UpgradeToPro);

var _RTLPage = require("./views/RTLPage/RTLPage.js");

var _RTLPage2 = _interopRequireDefault(_RTLPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboardRoutes = [{
  path: "/dashboard",
  name: "Dashboard",
  rtlName: "لوحة القيادة",
  icon: _Dashboard2.default,
  component: _Dashboard4.default,
  layout: "/admin"
}];
// core components/views for RTL layout

// core components/views for Admin layout
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
// @material-ui/icons
exports.default = dashboardRoutes;