import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <h1>Homepage Test</h1>
          </Route>
          <Route path="/chat">
            <h1>Chat Test</h1>
          </Route>
        </Switch>
        <Header />
      </Router>
    </div>
  );
}

/* 
Header {account info, logo, message}
<-left swipe/ current tile/ right swipe-> 
touch bar {undo btn, ls btn, mark btn, rs btn}

Chat list screen {header, list of chats *n, last message sent}
chat screen {header, chat, and chat history}
*/
