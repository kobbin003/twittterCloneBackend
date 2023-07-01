import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		profilename: {
			type: String,
		},
		avatar: {
			type: String,
		},
		background: {
			type: String,
		},
		bio: {
			type: String,
			required: true,
		},
		location: {
			type: String,
		},
		website: {
			type: String,
		},
		birthDate: {
			type: String,
		},
		followers: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		following: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		tweets: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Tweet",
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
		likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Tweet",
			},
		],
		bookmarks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Tweet",
			},
		],
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

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
