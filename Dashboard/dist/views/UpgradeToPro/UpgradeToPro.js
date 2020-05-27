"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpgradeToPro;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _GridItem = require("../../components/Grid/GridItem.js");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer.js");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Danger = require("../../components/Typography/Danger.js");

var _Danger2 = _interopRequireDefault(_Danger);

var _Success = require("../../components/Typography/Success.js");

var _Success2 = _interopRequireDefault(_Success);

var _Button = require("../../components/CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components

// @material-ui/icons
var styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
};
// @material-ui/core components


var useStyles = (0, _styles.makeStyles)(styles);

function UpgradeToPro() {
  var classes = useStyles();
  return _react2.default.createElement(
    _GridContainer2.default,
    { justify: "center" },
    _react2.default.createElement(
      _GridItem2.default,
      { xs: 12, sm: 12, md: 8 },
      _react2.default.createElement(
        _Card2.default,
        null,
        _react2.default.createElement(
          _CardHeader2.default,
          { color: "info" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Material Dashboard PRO React"
          ),
          _react2.default.createElement(
            "p",
            { className: classes.cardCategoryWhite },
            "Are you looking for more components? Please check our Premium Version of Material Dashboard Angular."
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          _react2.default.createElement(
            "div",
            { className: classes.tableUpgradeWrapper },
            _react2.default.createElement(
              "table",
              { className: classes.table },
              _react2.default.createElement(
                "thead",
                null,
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement("th", null),
                  _react2.default.createElement(
                    "th",
                    { className: classes.center },
                    "Free"
                  ),
                  _react2.default.createElement(
                    "th",
                    { className: classes.center },
                    "PRO"
                  )
                )
              ),
              _react2.default.createElement(
                "tbody",
                null,
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "Components"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "30"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "200"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "Plugins"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "2"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "10"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "Example Pages"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "7"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "28"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "Login, Register, Pricing, Lock Pages"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Danger2.default,
                      null,
                      _react2.default.createElement(_Close2.default, null)
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Success2.default,
                      null,
                      _react2.default.createElement(_Check2.default, null)
                    )
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "ReactTables, ReactVectorMap, ReactSweetAlert, Wizard, Validation, ReactBigCalendar etc..."
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Danger2.default,
                      null,
                      _react2.default.createElement(_Close2.default, null)
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Success2.default,
                      null,
                      _react2.default.createElement(_Check2.default, null)
                    )
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "Mini Sidebar"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Danger2.default,
                      null,
                      _react2.default.createElement(_Close2.default, null)
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Success2.default,
                      null,
                      _react2.default.createElement(_Check2.default, null)
                    )
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    "Premium Support"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Danger2.default,
                      null,
                      _react2.default.createElement(_Close2.default, null)
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Success2.default,
                      null,
                      _react2.default.createElement(_Check2.default, null)
                    )
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement("td", null),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "Free"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    "Just $59"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement("td", null),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Button2.default,
                      { round: true, disabled: true },
                      "Current Version"
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: classes.center },
                    _react2.default.createElement(
                      _Button2.default,
                      {
                        round: true,
                        color: "danger",
                        href: "https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-upgrade-live"
                      },
                      "Upgrade to Pro"
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}