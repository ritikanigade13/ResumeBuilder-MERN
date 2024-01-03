const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001; // Use process.env.PORT for the port

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(express.json());

app.use(cors(corsOptions));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send("Logged in Successfully").status(201);
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.send("Registered Successfully").status(201);
});

// Use to read JSON files from the request body
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
