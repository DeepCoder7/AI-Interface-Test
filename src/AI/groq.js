import Groq from "groq-sdk";
import env from "../conf/env.js";
import { API_AND_DESCRIPTION, DEMO_COMMAND } from "../utils/constants/constant.js";
import fs from "fs/promises";

const groq = new Groq({ apiKey: env.GROQ_API_KEY });

// ${API_AND_DESCRIPTION.reduce((acc, item, index) => {
//   const separator = index ? "" : ",";
//   return `${separator}${item.category}: ${item.description}`;
// }, "")}

export async function groqAgent(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `${JSON.stringify(API_AND_DESCRIPTION)}, based on this data return only one category name strictly`
      },
      ...prompt
    ],
    model: "llama3-70b-8192"
  })
}

export async function main(){
  const data = await Promise.allSettled(
    DEMO_COMMAND.map(async(msg) => {
      const dd = await groqAgent([{
        role: "user",
        content: `return the category of command : "${msg}", return only category name and avoid any symobol`
      }])
      return {
        prompt: msg,
        output: dd.choices[0]?.message?.content || "NO"
      }
    })
  )
  await fs.writeFile("index.json", JSON.stringify(data))
  console.log("DONE")
  return data;
}

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

// export async function getGroqChatCompletion() {
//   return groq.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content: "you are helpful assistant for summary of news in very short"
//       },
//       {
//         role: "user",
//         content: DEFAULT_NEWS
//       },
//     ],
//     model: "gemma2-9b-it",
//   });
// }

// llama-3.1-70b-versatile

// Note :
// 1. Groq may have higher per day limit but can't browse anything and give real-time data
// 2. have no of model in list