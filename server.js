const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user_routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/database");
const { checkUser } = require("./middleware/auth_middleware");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//secure all - jsonwebtoken
app.get("*", checkUser);

//routes
app.use("/api/user", userRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`listening port ${process.env.PORT}`);
});
