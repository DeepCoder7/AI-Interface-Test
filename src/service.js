import { geminiDetailedNewsAgent, geminiNewsAgent, geminiStockAgent } from "./AI/gemini.js";
import { catchService } from "./utils/responseFormatter.js";

const Service = () => {}

Service.news = async(command) => {
    try {
        const data = await geminiNewsAgent.generateContent(command)
        return data.response.candidates[0].content.parts[0].text;
    } catch (error) {
        return catchService(
            error,
            "service",
            "Service.news"
        )
    }
}

Service.detailedNews = async(command) => {
    try {
        const data = await geminiDetailedNewsAgent.generateContent(command)
        return data.response.candidates[0].content.parts[0].text;
    } catch (error) {
        return catchService(
            error,
            "service",
            "Service.detailedNews"
        )
    }
}

Service.getStockPrice = async(command, stockName) => {
    try {
        const data = await geminiStockAgent.generateContent(`stock is ${stockName}`);
        return data.response.candidates[0].content.parts[0].text;
    } catch (error) {
        return catchService(
            error,
            "service",
            "Service.getStockPrice"
        )
    }
}

Service.handleBuyAndSell = async(command, metaData) => {
    try {
        const data = await geminiStockAgent.generateContent(`What is the price of ${metaData?.stockName} stock, and what is the total price for ${metaData?.units || 1} shares?`);
        return data.response.candidates[0].content.parts[0].text;
    } catch (error) {
        return catchService(
            error,
            "service",
            "Service.handleBuyAndSell"
        )
    }
}

export default Service;