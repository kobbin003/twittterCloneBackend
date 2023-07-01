import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			// select: false,
		},
		handleName: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now(),
		},
	},
	{
		// collection: "newcollection",
		timestamps: true,
	}
);

const User = mongoose.model("User", UserSchema);
// const User = mongoose.model("user", UserSchema, "usercollection");

export default User;
