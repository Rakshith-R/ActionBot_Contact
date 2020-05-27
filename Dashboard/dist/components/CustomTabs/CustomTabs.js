"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// nodejs library that concatenates classes

// nodejs library to set properties for components


// material-ui components

// core components


exports.default = CustomTabs;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _Tabs = require("@material-ui/core/Tabs");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require("@material-ui/core/Tab");

var _Tab2 = _interopRequireDefault(_Tab);

var _Card = require("../Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require("../Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = require("../Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _customTabsStyle = require("../../assets/jss/material-dashboard-react/components/customTabsStyle.js");

var _customTabsStyle2 = _interopRequireDefault(_customTabsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_customTabsStyle2.default);

function CustomTabs(props) {
  var _classNames;

  var _React$useState = _react2.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };
  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;

  var cardTitle = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return _react2.default.createElement(
    _Card2.default,
    { plain: plainTabs },
    _react2.default.createElement(
      _CardHeader2.default,
      { color: headerColor, plain: plainTabs },
      title !== undefined ? _react2.default.createElement(
        "div",
        { className: cardTitle },
        title
      ) : null,
      _react2.default.createElement(
        _Tabs2.default,
        {
          value: value,
          onChange: handleChange,
          classes: {
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone
          },
          variant: "scrollable",
          scrollButtons: "auto"
        },
        tabs.map(function (prop, key) {
          var icon = {};
          if (prop.tabIcon) {
            icon = {
              icon: _react2.default.createElement(prop.tabIcon, null)
            };
          }
          return _react2.default.createElement(_Tab2.default, _extends({
            classes: {
              root: classes.tabRootButton,
              selected: classes.tabSelected,
              wrapper: classes.tabWrapper
            },
            key: key,
            label: prop.tabName
          }, icon));
        })
      )
    ),
    _react2.default.createElement(
      _CardBody2.default,
      null,
      tabs.map(function (prop, key) {
        if (key === value) {
          return _react2.default.createElement(
            "div",
            { key: key },
            prop.tabContent
          );
        }
        return null;
      })
    )
  );
}

CustomTabs.propTypes = {
  headerColor: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: _propTypes2.default.string,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    tabName: _propTypes2.default.string.isRequired,
    tabIcon: _propTypes2.default.object,
    tabContent: _propTypes2.default.node.isRequired
  })),
  rtlActive: _propTypes2.default.bool,
  plainTabs: _propTypes2.default.bool
};