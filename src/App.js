import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards/TinderCards";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <TinderCards />
          </Route>
          <Route path="/chat">
            <h1>Chat Test</h1>
          </Route>
        </Switch>
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
