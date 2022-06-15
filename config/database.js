const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.6iftq.mongodb.net/groupomania"
  )
  .then(() => console.log("connexion mongoDB"))
  .catch((err) => console.log("Failed connexion mongoDB", err));
