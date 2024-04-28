"use server";

import { fetchAccessToken } from "@humeai/voice";
import ClientComponent from "../component/ClientCompoenent";

const HUME_API_KEY = process.env.HUME_API_KEY;
const HUME_CLIENT_SECRET = process.env.HUME_CLIENT_SECRET || "";

export default async function Page() {
  console.log(" staring...");
  const accessToken = await fetchAccessToken({
    apiKey: HUME_API_KEY || "",
    clientSecret: HUME_CLIENT_SECRET,
  });

  console.log(accessToken);

  if (!accessToken) {
    console.log("error");
    throw new Error();
  }

  return (
    <div className=" h-screen flex justify-center dark:text-red-200 text-black items-center text-4xl font-extrabold bg-gray-900">
      <ClientComponent accessToken={accessToken} />
    </div>
  );
}
