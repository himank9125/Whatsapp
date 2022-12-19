import React from "react";
import ChatHead from "./subs/ChatHead";
import ChatMessages from "./subs/ChatMessages";
import ChatSendBox from "./subs/ChatSendBox";

export default function Chatbox() {
  return (
    <div className={`chatbox rel flex col`}>
      <ChatHead />
      <ChatMessages />
      <ChatSendBox />
    </div>
  );
}
