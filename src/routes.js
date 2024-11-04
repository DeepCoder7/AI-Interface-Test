import Controller from "./controller.js";
import { DataExtractionInterface, GetCategoryInterface } from "./interface.js";
import Responder from "./utils/responder.js";

const initRoutes = (app) => {
    app.post("/command", GetCategoryInterface, DataExtractionInterface, Controller.handleCategory)
    app.get("/healthCheck", Responder.healthCheck)
}

export default initRoutes;