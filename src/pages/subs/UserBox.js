import React from "react";
import { useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function UserBox() {
  const selector = useSelector((state) => state.myReducer);
  return (
    <div className={`userbox flex`}>
      <div className={`you rel flex aic`}>
        <div className={`user`}>
          <img src="https://placeimg.com/50/50/people" alt="wp" />
        </div>
        <div className={`meta`} style={{ paddingLeft: 10 }}>
          <h2 className={`name s14`}>{selector.currentuser}</h2>
        </div>
      </div>
      <div className={`actions rel flex aic`}>
        <button className={`s24`}>
          <ChatIcon />
        </button>

        <button className={` s24`}>
          <MoreVertIcon />
        </button>
      </div>
    </div>
  );
}
