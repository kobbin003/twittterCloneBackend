import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TweetSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	text: {
		type: String,
		required: true,
	},

	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		},
	],
	comments: [
		{
			comment: {
				type: Schema.Types.ObjectId,
				ref: "Comment",
			},
		},
	],
	retweets: [
		{
			user: {
				type: Scheme.Types.ObjectId,
				ref: "User",
			},
		},
	],
	views: [
		{
			user: {
				type: Scheme.Types.ObjectId,
				ref: "User",
			},
		},
	],
	bookmarks: [
		{
			user: {
				type: Scheme.Types.ObjectId,
				ref: "User",
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

const Tweet = mongoose.model("Tweet", TweetSchema);
export default Tweet;
