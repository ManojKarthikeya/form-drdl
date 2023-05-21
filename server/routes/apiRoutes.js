const express = require("express");
const response = require("../models/response");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/response/user/:id", (req, res) => {
	id = req.params.id;
	response
		.find({ userId: id })
		.exec()
		.then((responseObject) => {
			res.send(JSON.stringify(responseObject));
		});
});

router.get("/response/:id", (req, res) => {
	id = req.params.id;
	if (!ObjectId.isValid(id)) {
		res.send({});
	} else {
		response
			.findById(id)
			.exec()
			.then((responseObject) => res.send(JSON.stringify(responseObject)));
	}
});

router.get("/response", (req, res) => {
	response
		.find({})
		.exec()
		.then((responseObject) => res.send(JSON.stringify(responseObject)));
});

router.post("/response", (req, res) => {
	const { userId, fields } = req.body;
	response
		.create({
			userId: userId,
			fields: fields,
		})
		.then(() => {
			res.send("Created Successfully!");
		});
});

module.exports = router;
