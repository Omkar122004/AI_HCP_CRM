import { useSelector } from "react-redux";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatPanel() {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="bg-white rounded-xl shadow-lg h-[calc(100vh-3rem)] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b flex-shrink-0">
        <h2 className="text-2xl font-bold text-blue-600">🤖 AI Assistant</h2>

        <p className="text-gray-500 mt-1">
          Log interaction details here via chat
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      {/* Chat Input */}
      <div className="border-t p-4 flex-shrink-0">
        <ChatInput />
      </div>
    </div>
  );
}
