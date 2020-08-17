import React from "react";
import "./styles.css";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
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
