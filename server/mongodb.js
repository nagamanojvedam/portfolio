const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to ${conn.connection.name} database`);
  } catch (err) {
    console.log(`Problem connecting to mongodb: ${err.message}`);
    process.exit(1);
  }
};
