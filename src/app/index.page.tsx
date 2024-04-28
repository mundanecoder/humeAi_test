"use server";

import { fetchAccessToken } from "@humeai/voice";
import ClientComponent from "./component/ClientCompoenent";

const HUME_API_KEY = process.env.HUME_API_KEY;
const HUME_CLIENT_SECRET = process.env.HUME_CLIENT_SECRET || "";

export default async function Page() {
  const accessToken = await fetchAccessToken({
    apiKey: HUME_API_KEY || "",
    clientSecret: HUME_CLIENT_SECRET,
  });

  if (!accessToken) {
    throw new Error();
  }

  return <ClientComponent accessToken={accessToken} />;
}

// process.env.hume_API_key, process.env.hume_secret_key;
