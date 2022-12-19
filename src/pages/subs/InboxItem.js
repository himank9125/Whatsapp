import React from "react";
import { useDispatch } from "react-redux";

export default function InboxItem(props) {
  const dispatch = useDispatch();
  const setactiveuser = () => {
    dispatch({ type: "setactive", user: props.elm });
  };
  return (
    <div className={`conversation flex rel aic`} onClick={setactiveuser}>
      <div className={`you rel flex aic`}>
        <div className={`user`}>
          <img
            src={`https://placeimg.com/50/50/people?t=${Math.trunc(
              Math.random() * 100
            )}`}
            alt="myPhoto"
          />
        </div>
      </div>
      <div className={`meta rel flex aic`}>
        <div className={`info rel flex col`}>
          <h2 className={`name s14 wordwrap`}>{props.elm}</h2>
          <h2 className={`last-msg s13 c333 wordwrap`}>Last Message Here</h2>
        </div>
        <div className={`extra rel flex col aic`}>
          <h2 className={`stamp s11 c777`}>01:45 AM</h2>
          <div className={`badge rel s12 cfff`}>99+</div>
        </div>
      </div>
    </div>
  );
}
