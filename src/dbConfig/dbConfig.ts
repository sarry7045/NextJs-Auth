import mongoose from "mongoose";

export async function connect() {
  try {
    // mongoose.connect(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("DB Connected");
    });
    connection.on("error", () => {
      console.log("DB Connection Error");
      process.exit();
    });
  } catch (error) {
    console.log("Error");
  }
}
