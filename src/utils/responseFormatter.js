const { ERROR_TYPE } = require('./constants/constant');
const Responder = require('./responder')

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
    logger.error({
        message: error?.message,
        source: error?.source,
        status: error?.code ?? 500
    })
    const failedResponse = {
        statusCode: error?.code,
        error: error?.message,
        type: error?.type || ERROR_TYPE.SERVER_ERROR, // SERVER ERROR BY DEFAULT
        success: false
    }
    return Responder.operationFailed(failedResponse, res);
}

const catchService = (error, module, path) => {
    if (!error.source) {
        error.source = {
            [module]: path
        }
    }
    throw error;
}

module.exports = {
    ResponseFormatter,
    catchService
}