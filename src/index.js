const express = require("express");
const cors = require("cors");
const { initRoutes } = require("./routes");
const { logger } = require("./utils/logger");
const env = require("./conf/env");

const app = new express();
app.use(
    cors({
        origin: "*",
    })
)

app.set('server.timeout', 1000*60*2); // by default setting timeout for server connection 2 min

initRoutes(app)

app.listen(env.PORT, () => {
    logger.info(`Server is running on PORT: ${env.PORT}`)
})