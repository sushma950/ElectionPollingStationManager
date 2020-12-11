const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const cors = require("cors");

const Polling = require("./models/city");
const Data = require("./Data/data.json");

const dataRoutes = require("./Routes/dataRoutes");
const userRoutes = require("./Routes/userRoutes");

const app = express();

dotenv.config();

const db = mongoose.connection;

mongoose.connect(
    "mongodb://localhost/backend",
  { useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true },
  (err, res, req) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The database is connected");
    }
  }
);

db.once("open", async (req, res) => {
  if ((await Polling.countDocuments().exec()) > 0) {
    console.log("Data  added in the collection");
    return;
  }

  Polling.insertMany(Data)
    .then(() => console.log(" Data  added Successfully"))
    .catch((err) => console.log(`Error : ${err}`));
});

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/api", dataRoutes);



app.listen(5000, () => {
  console.log("The server is up and running on port " );
});
