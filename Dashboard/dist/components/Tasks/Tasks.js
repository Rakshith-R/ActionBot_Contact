"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// @material-ui/core components

// @material-ui/icons

// core components


exports.default = Tasks;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _styles = require("@material-ui/core/styles");

var _Checkbox = require("@material-ui/core/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Tooltip = require("@material-ui/core/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Table = require("@material-ui/core/Table");

var _Table2 = _interopRequireDefault(_Table);

var _TableRow = require("@material-ui/core/TableRow");

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableBody = require("@material-ui/core/TableBody");

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require("@material-ui/core/TableCell");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Edit = require("@material-ui/icons/Edit");

var _Edit2 = _interopRequireDefault(_Edit);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _tasksStyle = require("../../assets/jss/material-dashboard-react/components/tasksStyle.js");

var _tasksStyle2 = _interopRequireDefault(_tasksStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var useStyles = (0, _styles.makeStyles)(_tasksStyle2.default);

function Tasks(props) {
  var classes = useStyles();

  var _React$useState = _react2.default.useState([].concat(_toConsumableArray(props.checkedIndexes))),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var handleToggle = function handleToggle(value) {
    var currentIndex = checked.indexOf(value);
    var newChecked = [].concat(_toConsumableArray(checked));
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  var tasksIndexes = props.tasksIndexes,
      tasks = props.tasks,
      rtlActive = props.rtlActive;

  var tableCellClasses = (0, _classnames3.default)(classes.tableCell, _defineProperty({}, classes.tableCellRTL, rtlActive));
  return _react2.default.createElement(
    _Table2.default,
    { className: classes.table },
    _react2.default.createElement(
      _TableBody2.default,
      null,
      tasksIndexes.map(function (value) {
        return _react2.default.createElement(
          _TableRow2.default,
          { key: value, className: classes.tableRow },
          _react2.default.createElement(
            _TableCell2.default,
            { className: tableCellClasses },
            tasks[value]
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { className: classes.tableActions },
            _react2.default.createElement(
              _Tooltip2.default,
              {
                id: "tooltip-top-start",
                title: "Remove",
                placement: "top",
                classes: { tooltip: classes.tooltip }
              },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  "aria-label": "Close",
                  className: classes.tableActionButton
                },
                _react2.default.createElement(_Close2.default, {
                  className: classes.tableActionButtonIcon + " " + classes.close
                })
              )
            )
          )
        );
      })
    )
  );
}

Tasks.propTypes = {
  tasksIndexes: _propTypes2.default.arrayOf(_propTypes2.default.number),
  tasks: _propTypes2.default.arrayOf(_propTypes2.default.node),
  rtlActive: _propTypes2.default.bool,
  checkedIndexes: _propTypes2.default.array
};