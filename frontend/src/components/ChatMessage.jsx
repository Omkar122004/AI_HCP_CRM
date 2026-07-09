export default function ChatMessage({ message }) {
  if (message.sender === "welcome") {
    return (
      <div className="bg-blue-100 rounded-xl p-5 text-gray-700 leading-8">
        {message.text}
      </div>
    );
  }

  if (message.sender === "user") {
    return (
      <div className="flex justify-start">
        <div
          className="
            max-w-[90%]
            bg-gray-100
            border-l-4
            border-blue-500
            rounded-xl
            p-4
            text-gray-800
            whitespace-pre-wrap
          "
        >
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div
        className="
          max-w-[90%]
          bg-green-100
          border
          border-green-300
          rounded-xl
          p-4
          text-gray-800
          whitespace-pre-wrap
        "
      >
        {message.text}
      </div>
    </div>
  );
}
