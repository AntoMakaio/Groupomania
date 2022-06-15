const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user_routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/database");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware

//routes
app.use("/api/user", userRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`listening port ${process.env.PORT}`);
});
