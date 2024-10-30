import { ERROR_TYPE } from "./constants/constant";
import Responder from "./responder";

const ResponseFormatter = () => { }

ResponseFormatter.operationSuccess = (res, data, message, statusCode=200, success = true) => {
    const successResponse = {
        statusCode: statusCode ?? 200,
        success,
        data,
        message
    }
    return Responder.success(successResponse, res);
}

ResponseFormatter.operationFailed = (res, error, type, path) => {
    if (!error?.source) {
        error.source = {
            [type]: path,
        }
    }
    const failedResponse = {
        statusCode: error?.code,
        error: error?.message,
        type: error?.type || ERROR_TYPE.SERVER_ERROR, // SERVER ERROR BY DEFAULT
        success: false
    }
    return Responder.operationFailed(failedResponse, res);
}

export const catchService = (error, module, path) => {
    if (!error.source) {
        error.source = {
            [module]: path
        }
    }
    throw error;
}

export default ResponseFormatter