const mongoose = require("mongoose");
const println = require("./../utils/println");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    println({service: "dbConnection", level: "success", message: "connection to DB successful"});
  } catch (error) {
    console.log(error)
    console.log(JSON.stringify(error))
    println({service: "dbConnection", level: "error", message: "connection to DB failed"});
  }
}
