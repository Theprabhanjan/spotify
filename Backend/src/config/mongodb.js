import mongoose from "mongoose";


const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected with database");
  });

  await mongoose.connect(`${process.env.MONGODB_URl}/spotify`);
};
export default connectDb;