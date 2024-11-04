import { BaseError } from "../error.js";

const stringExtaction = (data) => {
    try {
        const startIndex = data.indexOf("{\"");
        const endIndex = data.indexOf("}");
        console.log(startIndex, endIndex, data, data.slice(startIndex, endIndex+1))
        return JSON.parse(data.slice(startIndex, endIndex+1));
    } catch (error) {
        throw new BaseError(500, error?.message || "Unable to process the data");
    }
}

export const API_DATA_EXTRACTION = {
    "news": (data) => data,
    "detailed-news": (data) => data,
    "portfolio-detail": (data) => data,
    "pricing-stock": (data) => data,
    "buy-stock": stringExtaction,
    "sell-stock": stringExtaction,
}