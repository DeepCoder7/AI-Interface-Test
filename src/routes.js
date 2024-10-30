const Responder = require("./utils/responder")

const initRoutes = (app) => {
    app.get("/healthCheck", Responder.healthCheck)
}

module.exports = {
    initRoutes
}