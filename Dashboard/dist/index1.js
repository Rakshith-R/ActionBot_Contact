'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { Widget } from 'rasa-webchat';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _rasaWebchatCustom = require('rasa-webchat-custom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleExit = function handleExit() {
    console.log('in exit');
    // console.log("use effect called")
    var chat_session = JSON.parse(window.localStorage.getItem("chat_session"));
    console.log(chat_session);
    if (chat_session) {
        chat_session = _extends({}, chat_session, { "conversation": [], "params": _extends({}, chat_session["params"], { "isChatOpen": false, "initialized": false }) });
        console.log(chat_session);
        window.localStorage.setItem("chat_session", JSON.stringify(chat_session));
        window.localStorage.setItem("my_item", "hello");
    }
};

var handleConnect = function handleConnect() {
    console.log("before geo");
    if (!navigator.geolocation) {
        console.log("not supported");
        return;
    }
    navigator.geolocation.getCurrentPosition(function (pos) {
        var session_id = JSON.parse(window.localStorage.getItem("chat_session")).session_id;
        console.log("session id" + session_id);
        var link = "http://localhost:5005/conversations/" + session_id + "/tracker/events/";
        var json_body = JSON.stringify({ "event": "slot", "name": "location", "value": { 'lat': pos.coords.latitude, 'long': pos.coords.longitude } });
        console.log('before fetch');
        fetch(link, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: json_body
        }).then(function (res) {
            return console.log("Sent location: " + pos.coords.latitude + " " + pos.coords.longitude);
        });
    });
};

var A = function A() {

    (0, _react.useEffect)(function () {
        // console.log("use effect called")
        // let chat_session = JSON.parse(window.localStorage.getItem("chat_session"))
        // chat_session = { ...chat_session, "conversation": [], "isChatOpen": false }
        // console.log(chat_session)
        // window.localStorage.setItem("chat_session", JSON.stringify(chat_session))
        // window.localStorage.setItem("my_item", "hello")
        // handleExit()
        window.addEventListener("beforeunload", handleExit);
        return function () {
            return window.removeEventListener("beforeunload", handleExit);
        };
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_App2.default, null),
        _react2.default.createElement(_rasaWebchatCustom.Widget, {
            initPayload: "/greet",
            socketUrl: "http://localhost:5005",
            socketPath: "/socket.io/",
            customData: { language: "en" } // arbitrary custom data. Stay minimal as this will be added to the socket
            , title: "Contact"
            // params={{ "storage": "session" }}
            , onSocketEvent: {
                // 'connect': () => handleConnect(),
                'bot_uttered': function bot_uttered() {
                    return handleConnect();
                }
            }
        })
    );
};

exports.default = A;