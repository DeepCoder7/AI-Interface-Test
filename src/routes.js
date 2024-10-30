import Responder from "./utils/responder.js";

const initRoutes = (app) => {
    // app.post("/ask", )
    app.get("/healthCheck", Responder.healthCheck)
}

export default initRoutes;