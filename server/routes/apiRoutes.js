const express = require("express");
const response = require("../models/response");
const router = express.Router();

router.post("/searchResponse", (req, res) => {});

router.post("/createResponse", (req, res) => {
	const { userId, fields } = req.body;
	console.log(req.body);
	response.create({
		userId: userId,
		fields: fields,
	});

	res.send("Created Successfully!");
});

module.exports = router;
