import Groq from "groq-sdk";
import env from "../conf/env.js";
import { API_AND_DESCRIPTION, API_DATA_FIELDS, DEMO_COMMAND } from "../utils/constants/constant.js";
import fs from "fs/promises";

const groq = new Groq({ apiKey: env.GROQ_API_KEY });

export async function groqCategoryAgent(prompt) {
  const data = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Given a command related to one of the following categories:\n${API_AND_DESCRIPTION.reduce((acc, item, index) => {
          acc += `${index + 1}. ${item.category} - ${item.description}.\n`;
          return acc;
        }, "")}Identify and return only the category name as plain text, that matches the intent of the command.\nFor example - Command: "Buy 10 shares of Tesla."\nExpected Output: "buy-stock"`
      },
      ...prompt
    ],
    model: "llama3-70b-8192"
  })
  if (!data) {
    throw new Error("Unable to process")
  }
  return data.choices[0]?.message?.content
}

export async function groqExtraction(prompt, systemPrompt) {
  const data = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      ...prompt
    ],
    model: "llama3-70b-8192"
  })
  if(!data){
    throw new Error("Unable to process")
  }
  return data.choices[0]?.message?.content;
}

export async function main() {
  const data = await Promise.allSettled(
    DEMO_COMMAND.map(async (msg) => {
      try {
        const dd = await groqCategoryAgent([{
          role: "user",
          content: `command : "${msg}", don't return any extra text`
        }])

        const output = dd;

        const inputData = API_DATA_FIELDS[output] ? await groqExtraction([
          {
            role: "user",
            content: `return the extracted data from command: "${msg}", return only given feild, stictly extract only given fields data`
          }
        ], API_DATA_FIELDS[output]) : ""
        return {
          prompt: msg,
          output,
          data: inputData
        }
      } catch (error) {
        console.log(msg, error);
        throw error;
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