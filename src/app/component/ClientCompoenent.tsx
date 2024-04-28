// ./components/ClientComponent.tsx
"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  return (
    <div
      className="border flex-col h-96 w-screen flex justify-center items-center dark:text-red-200 text-black items-center text-4xl font-extrabold bg-gray-900"
      style={{ border: "1px solid black" }}
    >
      <VoiceProvider auth={{ type: "accessToken", value: accessToken }}>
        <Messages />
        <Controls />
      </VoiceProvider>
    </div>
  );
}
