const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./mongodb");

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Express server running in port: ${PORT}`);
  });
};

startServer();
