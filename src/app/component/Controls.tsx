// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";

export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();
  if (readyState === VoiceReadyState.OPEN) {
    return (
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          disconnect();
        }}
      >
        End Session
      </button>
    );
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => {
        connect()
          .then(() => {
            console.log("success", readyState);

            VoiceReadyState;

            // useVoice();

            /* handle success */
          })
          .catch(() => {
            console.log("error");
            /* handle error */
          });
      }}
    >
      Start Session
    </button>
  );
}
