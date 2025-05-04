import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://luancalais:HS9uQkuDAqz2OdRU@cluster0.4jlztp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✅ MongoDB can be connected");
  })
  .catch((ex) => {
    console.error("❌ MongoDB cannot be connected", ex);
    process.exit(1);
  });
