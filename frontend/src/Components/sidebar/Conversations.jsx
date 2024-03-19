import React from "react";
import { Conversation } from "./Conversation";
import { useGetConversations } from "../../Hooks/useGetConversations";

export const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVESATIONS:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};
