import mongoose from "mongoose";

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	parentComment: {
		type: Schema.Types.ObjectId,
		ref: "Comment",
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
	date: {
		type: Date,
		default: Date.now,
	},
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
