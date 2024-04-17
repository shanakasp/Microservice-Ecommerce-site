const mongoose = require("mongoose");

// Directly include the MongoDB URI here
const DB_URL =
  "mongodb+srv://shanakaprince:shanaka@cluster0.lmfajzb.mongodb.net/shopping_customer";

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
    process.exit(1);
  }
};
