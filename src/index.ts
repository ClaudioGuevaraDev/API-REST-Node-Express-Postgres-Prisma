import app from "./app";
import { APP_PORT } from "./config";

function startServer() {
  try {
    app.listen(APP_PORT);
    console.log("Server on port " + APP_PORT);
  } catch (error) {
    console.log(error);
  }
}

startServer();
