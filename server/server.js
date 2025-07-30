const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB connection error:", err));



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  res.send("API Running...");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
