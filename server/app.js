require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();
const connectDB = require("./db/connect");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/api", require("./routes/apiRoutes"))

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${process.env.PORT}`);
});
