import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChatSendBox() {
  const selector = useSelector((state) => state.myReducer);
  // const codeSent = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();

  const [msg, setMsg] = useState("");
  const [fetched, setFetched] = useState("");
  // ----------------------Fetching and Synching---------------------
  let fetching = () => {
    let url =
      "https://whatsapp-7547d-default-rtdb.firebaseio.com/messages.json";
    fetch(url)
      .then((elm) => elm.json())
      .then((elm) => {
        dispatch({ type: "syncdata", data: elm });
        setFetched(elm.chats);
      })
      .catch((err) => console.log(err));
  };
  let sending = () => {
    let url =
      "https://whatsapp-7547d-default-rtdb.firebaseio.com/messages.json";
    let sendingItem = {
      chats: [
        ...fetched,
        {
          sender: selector.currentuser,
          receiver: selector.activeuser,
          text: msg,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          media: null,
        },
      ],
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendingItem),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("sending Done fetching started", data);
        fetching();
      });
  };
  useEffect(() => {
    fetching();
  }, []);
  // ----------------------Fetching and Synching---------------------
  const sendData = (evt) => {
    if (evt.key === "Enter") {
      if (msg.length > 1) {
        sending();
      }
      setMsg("");
    }
  };
  return (
    <div className={`sendbox flex aic`}>
      <button className={`s24`}>
        <EmojiEmotionsIcon />
      </button>
      <textarea
        className={`new-message s14 font`}
        placeholder={`type a message`}
        value={msg}
        onChange={(evt) => {
          setMsg(evt.target.value);
        }}
        onKeyUp={sendData}
      />
      <button className={`s24`}>
        <MicIcon />
      </button>
    </div>
  );
}
