import Groq from "groq-sdk";
import env from "../conf/env.js";
import { DEFAULT_NEWS } from "../utils/constants/constant.js";

const groq = new Groq({ apiKey: env.GROQ_API_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "you are helpful assistant for summary of news in very short"
      },
      {
        role: "user",
        content: DEFAULT_NEWS
      },
    ],
    model: "gemma2-9b-it",
  });
}

// Note :
// 1. Groq may have higher per day limit but can't browse anything and give real-time data
// 2. have no of model in list