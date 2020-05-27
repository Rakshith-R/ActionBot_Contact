import React from 'react';
import './index.css';
import App from './App';
// import { Widget } from 'rasa-webchat';
import { useEffect } from 'react'
import { Widget } from 'rasa-webchat-custom'


const handleExit = () => {
    console.log('in exit')
    // console.log("use effect called")
    let chat_session = JSON.parse(window.localStorage.getItem("chat_session"))
    console.log(chat_session)
    if (chat_session) {
        chat_session = { ...chat_session, "conversation": [], "params": { ...chat_session["params"], "isChatOpen": false, "initialized": false } }
        console.log(chat_session)
        window.localStorage.setItem("chat_session", JSON.stringify(chat_session))
        window.localStorage.setItem("my_item", "hello")
    }
}

const handleConnect = () => {
    console.log("before geo")
    if (!navigator.geolocation) {
        console.log("not supported")
        return
    }
    navigator.geolocation.getCurrentPosition((pos) => {
        let session_id = JSON.parse(window.localStorage.getItem("chat_session")).session_id
        console.log("session id" + session_id)
        let link = "http://7bb25a4a.ngrok.io/conversations/" + session_id + "/tracker/events/"
        let json_body = JSON.stringify({ "event": "slot", "name": "location", "value": { 'lat': pos.coords.latitude, 'long': pos.coords.longitude } })
        console.log('before fetch')
        fetch(link, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: json_body
        }).then(res => console.log("Sent location: " + pos.coords.latitude + " " + pos.coords.longitude))
    })
}

const A = () => {

    useEffect(() => {
        // console.log("use effect called")
        // let chat_session = JSON.parse(window.localStorage.getItem("chat_session"))
        // chat_session = { ...chat_session, "conversation": [], "isChatOpen": false }
        // console.log(chat_session)
        // window.localStorage.setItem("chat_session", JSON.stringify(chat_session))
        // window.localStorage.setItem("my_item", "hello")
        // handleExit()
        window.addEventListener("beforeunload", handleExit)
        return () => window.removeEventListener("beforeunload", handleExit)
    })

    return <div><App />
        <Widget
            initPayload={"/greet"}
            socketUrl={"http://7bb25a4a.ngrok.io"}
            socketPath={"/socket.io/"}
            customData={{ language: "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
            title={"Contact"}
            // params={{ "storage": "session" }}
            onSocketEvent={{
                // 'connect': () => handleConnect(),
                'bot_uttered': () => handleConnect()
            }}
        /></div>
}

export default A;
