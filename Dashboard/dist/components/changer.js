'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Changer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Changer(props) {
  var colors = ['#3dca3d', '#f38615', '#1530f3', '#db15f3'];

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      i = _useState2[0],
      si = _useState2[1];

  var change = (0, _react.useCallback)(function () {
    si(function (i) {
      return (i + 1) % props.names.length;
    });
  }, [si]);
  (0, _react.useEffect)(function () {
    console.log('This will run every second!');
    var timeout = setInterval(function () {
      change();
    }, 1500);
    return function () {
      return clearInterval(timeout);
    };
  }, []);
  return _react2.default.createElement(
    'span',
    { style: { fontSize: '1.4em', fontWeight: '500', color: colors[i] } },
    props.names[i]
  );
}