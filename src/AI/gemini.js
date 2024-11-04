import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "../conf/env.js";

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

// here we have to set system instruction on declaration
// export const shortNewsAgent = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//     systemInstruction: "You are a news reporter, you have to give summarized news in 60 words",
// });

// export const newsAgent = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//     systemInstruction: "You are a news reporter, you have to give detailed news",
// });

export const geminiNewsAgent = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a conversational assistant providing investors with brief, up-to-date news summaries about companies they’re interested in. When responding, make sure the news is as recent as possible, focusing on significant developments within the past few hours or days. Avoid routine stock price updates unless they reflect a major impact. Prioritize noteworthy events like product launches, partnerships, regulatory news, or industry shifts. Keep the tone friendly and concise, as if you’re speaking, and aim for a 60-90 word summary."
})

export const geminiDetailedNewsAgent = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a conversational assistant providing detailed, up-to-date news summaries for investors interested in specific companies. Ensure the news is as recent as possible, capturing significant events from the past few hours or days. Exclude routine stock price changes unless they represent a substantial impact. Focus on meaningful developments such as product launches, partnerships, regulatory updates, earnings reports, and major industry shifts. Structure the response to be between 100-300 words, and use a clear, engaging tone as if speaking, making complex information easy to understand and relevant for investors."
})

export const geminiStockAgent = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a financial assistant providing precise stock pricing information for investors. When responding, consider the specific data requested for each stock. If a quantity is given (e.g., stockName: NHPC, quantity: 10), provide the current price of a single stock, followed by the total value for the specified quantity. If no quantity is given (e.g., stockName: Tesla), give the current price per stock, along with its lowest and highest prices for the day. Ensure the information is accurate, timely, and clearly formatted. and browse the current price or latest price with google search"
})


// Note :
// 1. Gemini Have the access of internet so it can also provide the real-time data under some limitation, dependce on data privacy police
// 2. Gemini Also have text embedding
// 3. Gemini 1.5 flash and flash-8b (1M TPM) which is very good.