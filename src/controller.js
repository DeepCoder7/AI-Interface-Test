import Service from "./service.js";
import ResponseFormatter from "./utils/responseFormatter.js";

const Controller = () => {}

Controller.handleCategory = async(
    req,
    res
) => {
    try {
        // const news = await Service.detailedNews(req.body.command);
        const { command } = req.body;
        let data = null;
        switch (req.category) {
            case "news":
                data = await Service.news(command)
                break;
            case "detailed-news":
                data = await Service.detailedNews(command)
                break;
            case "pricing-stock":
                data = await Service.getStockPrice(command, req.metaData)
                break;
            case "buy-stock":
                data = await Service.handleBuyAndSell(command, req.metaData)
                break;
            case "sell-stock":
                data = await Service.handleBuyAndSell(command, req.metaData)
                break;
            default:
                break;
        }
        // const reqData = {
        //     command: req.body.command,
        //     category: req.category,
        //     data: req.metaData,
        // }
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
            "Controller.handleCategory",
        )
    }
}

export default Controller;