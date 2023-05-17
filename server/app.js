require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());