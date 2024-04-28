// ./components/Controls.tsx
"use client";
import { useVoice } from "@humeai/voice-react";

export default function Messages() {
  const { messages }: any = useVoice();

  console.log(messages);

  return (
    <div>
      {messages.map(({ id, message }: any, index: any) => (
        <div key={index}>
          <div>{message?.role}</div>
          <div>{message?.content}</div>
        </div>
      ))}
    </div>
  );
}
