const sendHttpResponse = (res, statusCode, responseObj) => {
    return res.status(statusCode).json(responseObj)
}

const Responder = () => { }

Responder.success = async (
    responseObj,
    res
) => {
    const { statusCode: code, ...restObj } = responseObj
    const statusCode = code || 200;
    const updatedResponseObj = {
        ...restObj
    }
    return sendHttpResponse(res, statusCode, updatedResponseObj);
}

Responder.operationFailed = async (
    responseObj,
    res
) => {
    const { statusCode: code, ...restObj } = responseObj
    const statusCode = code || 500;
    const updatedResponseObj = {
        ...restObj
    }
    return sendHttpResponse(res, statusCode, updatedResponseObj)
}

Responder.healthCheck = async (req, res) => {
    return res.send(`healthCheck for ${req.url}`)
}

module.exports = Responder