import ResponseFormatter from "./utils/responseFormatter.js";

const Controller = () => {}

Controller.askFinance = async(
    req,
    res
) => {
    try {
        return ResponseFormatter.operationSuccess(
            res,
            data,
            ""
        )
    } catch (error) {
        return ResponseFormatter.operationFailed(
            res,
            error,
            "controller",
            "Controller.askFinance",
        )
    }
}

export default Controller;