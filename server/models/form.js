const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		fields: {
			type: [
				{
					key: String,
					required: Boolean,
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

module.exports = mongoose.model("Response", formSchema);
