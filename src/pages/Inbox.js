import React from "react";
import { useSelector } from "react-redux";

import InboxItem from "./subs/InboxItem";
import SearchBox from "./subs/SearchBox";
import UserBox from "./subs/UserBox";

export default function Inbox() {
  const selector = useSelector((state) => state.myReducer);
  let arr = selector.users;
  return (
    <div className={`inbox rel flex col`}>
      <UserBox />
      <SearchBox />
      <div className={`conv-list rel`}>
        {arr.map((elm, idx) => {
          return <InboxItem key={idx} elm={elm} />;
        })}
      </div>
    </div>
  );
}
