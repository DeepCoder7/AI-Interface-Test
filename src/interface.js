import ResponseFormatter from "./utils/responseFormatter.js";
import { groqCategoryAgent, groqExtraction } from "./AI/groq.js";
import { API_DATA_FIELDS } from "./utils/constants/constant.js";
import { BadRequestError } from "./utils/error.js";
import { API_DATA_EXTRACTION } from "./utils/constants/extaction.js";

export const GetCategoryInterface = async (
    req,
    res,
    next
) => {
    try {
        const { command } = req.body;
        if (!command) {
            throw new BadRequestError("command is empty", "USER_ERROR");
        }
        req.category = await groqCategoryAgent([{
            role: "user",
            content: `command : "${command}", don't return any extra text`
        }])
        next();
    } catch (error) {
        return ResponseFormatter.operationFailed(
            res,
            error,
            "INTERFACE",
            "GetCategoryInterface"
        )
    }
}

export const DataExtractionInterface = async (
    req,
    res,
    next
) => {
    try {
        if(!API_DATA_FIELDS[req.category]){
            req.metaData = null;
            next();
        }
        const { command } = req.body;
        const data = await groqExtraction([
            {
                role: "user",
                content: `return the extracted data from command: "${command}"`
            }
        ], API_DATA_FIELDS[req.category])
        req.metaData = API_DATA_EXTRACTION[req.category](data);
        next();
    } catch (error) {
        return ResponseFormatter.operationFailed(
            res,
            error,
            "INTERFACE",
            "DataExtractionInterface"
        )
    }
}