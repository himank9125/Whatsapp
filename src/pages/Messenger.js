import React from "react";
import Chatbox from "./ChatBox";
import Inbox from "./Inbox";

export default function Messenger() {
  return (
    <>
      <div className={`green-belt`}></div>
      <div className={`messenger fixed  flex`}>
        <Inbox />
        <Chatbox />
      </div>
    </>
  );
}
