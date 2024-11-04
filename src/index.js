import express from "express";
import cors from "cors";
import initRoutes from "./routes.js";
import env from "./conf/env.js";
// import { main } from "./AI/groq.js";

const app = express(); // Use express() directly, not new express()
app.use(
    cors({
        origin: "*",
    })
);

app.set('server.timeout', 1000 * 60 * 2); // by default setting timeout for server connection 2 min
app.use(express.json())
initRoutes(app);

// main();

app.listen(env.PORT, () => {
    console.log(`Server is running on PORT: ${env.PORT}`);
});
