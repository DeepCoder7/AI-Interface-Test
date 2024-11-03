import { GoogleGenerativeAI } from "@google/generative-ai";
import { DEFAULT_NEWS } from "../utils/constants/constant.js";
import env from "../conf/env.js";

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

// here we have to set system instruction on declaration
export const shortNewsAgent = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a news reporter, you have to give summarized news in 60 words",
});

export const newsAgent = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a news reporter, you have to give detailed news",
});

// export const GeminiMain = async() =>{
//     const result = await shortNewsAgent.generateContent(DEFAULT_NEWS);
//     console.log(result.response.text());
// }


// Note :
// 1. Gemini Have the access of internet so it can also provide the real-time data under some limitation, dependce on data privacy police
// 2. Gemini Also have text embedding
// 3. Gemini 1.5 flash and flash-8b (1M TPM) which is very good.