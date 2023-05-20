const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		formId: { type: mongoose.Schema.Types.ObjectId },
		fields: {
			type: [
				{
					value: String,
					key: String,
					required: Boolean,
					valueStyles: {
						underlined: Boolean,
						italic: Boolean,
						bold: Boolean,
						fontSize: Number,
					},
					keyStyles: {
						underlined: Boolean,
						italic: Boolean,
						bold: Boolean,
						fontSize: Number,
					},
				},
			],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Response", responseSchema);
