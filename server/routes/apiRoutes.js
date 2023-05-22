const express = require("express");
const response = require("../models/response");
const { default: mongoose } = require("mongoose");
const form = require("../models/form");
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
	const { userId, fields, formName, formId } = req.body;
	console.log(req.body)
	response
		.create({
			userId: userId,
			fields: fields,
			formName : formName,
			formId : formId
		})
		.then((re) => {
			res.send(re);
		});
});

// FORMS

router.get("/form", (req, res) => {
	form
	.find({})
	.exec()
	.then((responseObject) => res.send(JSON.stringify(responseObject)));
})

router.get("/form/:id", (req, res) => {
	id = req.params.id;
	if (!ObjectId.isValid(id)) {
		res.send({});
	} else {
		form
			.findById(id)
			.exec()
			.then((responseObject) => res.send(JSON.stringify(responseObject)));
	}
})

router.post("/form", (req, res) => {
	const {name, fields} = req.body;
	form.create({
		name : name,
		fields : fields
	}).then((news)=>{
		console.log(news)
		res.send(news)
	})
})

module.exports = router;
