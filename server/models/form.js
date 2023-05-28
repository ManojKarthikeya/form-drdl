const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String },
		fields: {
			type: [
				{
					question: String,
					isRequired: Boolean,
					questionStyles: {
						underlined: Boolean,
						italic: Boolean,
						bold: Boolean,
						fontSize: Number,
						fontFamily: String,
						color: String,
					},
					responseStyles: {
						underlined: Boolean,
						italic: Boolean,
						bold: Boolean,
						fontSize: Number,
						fontFamily: String,
						color: String,
					},
					validation: {
						type: String,
						condition: String,
						value: String,
					},
					subQuestion: {
						question: String,
						isRequired: Boolean,
						questionStyles: {
							underlined: Boolean,
							italic: Boolean,
							bold: Boolean,
							fontSize: Number,
							fontFamily: String,
							color: String,
						}, 
						responseStyles: {
							underlined: Boolean,
							italic: Boolean,
							bold: Boolean,
							fontSize: Number,
							fontFamily: String,
							color: String,
						},
						validation: {
							type: String,
							condition: String,
							value: String,
						},
					},
				},
			],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
