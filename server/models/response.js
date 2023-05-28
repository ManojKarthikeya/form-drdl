const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		formId: { type: mongoose.Schema.Types.ObjectId },
		fields: {
			type: [
				{
					question: String,
					response: String,
					subQuestion: {
						question: String,
						response: String,
					},
				},
			],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Response", responseSchema);
