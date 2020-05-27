"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _GridItem = require("../../components/Grid/GridItem.js");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer.js");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Table = require("../../components/Table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Card = require("../../components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components
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
  }
};
// @material-ui/core components


var useStyles = (0, _styles.makeStyles)(styles);

function TableList() {
  var classes = useStyles();
  return _react2.default.createElement(
    _GridContainer2.default,
    null,
    _react2.default.createElement(
      _GridItem2.default,
      { xs: 12, sm: 12, md: 12 },
      _react2.default.createElement(
        _Card2.default,
        null,
        _react2.default.createElement(
          _CardHeader2.default,
          { color: "primary" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Simple Table"
          ),
          _react2.default.createElement(
            "p",
            { className: classes.cardCategoryWhite },
            "Here is a subtitle for this table"
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          _react2.default.createElement(_Table2.default, {
            tableHeaderColor: "primary",
            tableHead: ["Name", "Country", "City", "Salary"],
            tableData: [["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"], ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"], ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"], ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"], ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"], ["Mason Porter", "Chile", "Gloucester", "$78,615"]]
          })
        )
      )
    ),
    _react2.default.createElement(
      _GridItem2.default,
      { xs: 12, sm: 12, md: 12 },
      _react2.default.createElement(
        _Card2.default,
        { plain: true },
        _react2.default.createElement(
          _CardHeader2.default,
          { plain: true, color: "primary" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Table on Plain Background"
          ),
          _react2.default.createElement(
            "p",
            { className: classes.cardCategoryWhite },
            "Here is a subtitle for this table"
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          _react2.default.createElement(_Table2.default, {
            tableHeaderColor: "primary",
            tableHead: ["ID", "Name", "Country", "City", "Salary"],
            tableData: [["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"], ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"], ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"], ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"], ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"], ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]]
          })
        )
      )
    )
  );
}