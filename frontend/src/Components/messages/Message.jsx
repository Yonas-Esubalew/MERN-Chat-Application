import React from "react";
import useConversation from "../../Zustand/useConversation";
import { useAuthContext } from "../../Context/AuthContext";
import { extractTime } from "../../Utils/extractTime";
export const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilepic = fromMe
    ? authUser.profilepic
    : selectedConversation?.profilepic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilepic} alt="Tailwind css chat bubble component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white bg-color-500 ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
        {formatedTime}
      </div>
    </div>
  );
};
