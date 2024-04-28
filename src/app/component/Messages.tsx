import { useVoice } from "@humeai/voice-react";

export default function Messages() {
  const { messages }: any = useVoice();

  return (
    <div className="border h-screen bg-white overflow-y-scroll">
      {messages.map(({ id, message }: any, index: any) => (
        <div key={index} className="flex justify-start items-start mb-4">
          {message?.role === "user" ? (
            <div className="bg-blue-500 text-white rounded-lg p-2">
              <p>User: {message?.content}</p>
            </div>
          ) : (
            <div className="bg-gray-200 rounded-lg p-2">
              <p>Assistant: {message?.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
