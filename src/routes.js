import Responder from "./utils/responder.js";

const initRoutes = (app) => {
    // app.get("/news");
    // app.get("/detailed-news");
    // app.get("/portfolio-detail");
    // app.get("/pricing-stock");
    // app.post("/buy-stock");
    // app.post("/sell-stock");
    app.get("/healthCheck", Responder.healthCheck)
}

export default initRoutes;