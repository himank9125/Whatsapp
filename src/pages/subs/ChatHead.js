import React from "react";
import { useSelector } from "react-redux";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ChatHead() {
  const selector = useSelector((state) => state.myReducer);
  return (
    <div className={`chathead flex`}>
      <div className={`you rel flex aic`}>
        <div className={`user`}>
          <img src={"https://placeimg.com/50/50/people"} alt="wp" />
        </div>
        <div className={`meta`}>
          <h2 className={`name s14`}>{selector.activeuser}</h2>
          <h2 className={`status s12 c777`}>Last seen 5 minute ago</h2>
        </div>
      </div>
      <div className={`actions rel flex aic`}>
        <button className={` s24`}>
          <AttachFileIcon />
        </button>
        <button className={`s24`}>
          <MoreVertIcon />
        </button>
      </div>
    </div>
  );
}
