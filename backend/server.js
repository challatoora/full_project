require("dotenv").config();

const app = require("./app");

const { connectMySQL } = require("./config/mysql");
const connectMongoDB = require("./config/mongodb");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectMySQL();
    await connectMongoDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log(error);
  }
}

startServer();