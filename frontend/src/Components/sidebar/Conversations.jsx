import React from "react";
import { Conversation } from "./Conversation";
import { useGetConversations } from "../../Hooks/useGetConversations";
import { getRandomEmoji } from "../../Utils/emojis";
export const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}


      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
