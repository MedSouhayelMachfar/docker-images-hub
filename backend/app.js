require("dotenv").config();
const app = require("express")();
const connectDB = require('./config/dbConnect');
const Routes = require("./routes");
const println = require("./utils/println");
const middlewaresBeforeRoutes = require('./middlewares/middlewaresBeforeRoutes.js');
const middlewaresAfterRoutes = require('./middlewares/middlewaresAfterRoutes.js');

const PORT = process.env.PORT || 3000;

// Middleware before routes
middlewaresBeforeRoutes(app);

// Connecting to Database
connectDB()

// Mounting Routes
new Routes(app).mount();

// Middleware after routes
middlewaresAfterRoutes(app);


// Running server
app.listen(PORT, () => {
  println({service: "appication", level: "success", message: `Server is running and listening on port ${PORT}`});
});