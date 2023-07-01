import mongoose from "mongoose";
import dotenv from "dotenv";
if (process.env.NODE_ENV == "test") {
	dotenv.config({ path: ".env.test" });
	console.log("test");
} else {
	dotenv.config({
		path: ".env.development",
	});
	console.log("nottest");
}
// dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected...");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
/** we could have just written
 * < mongoose.connect(db); >
 * BUT we want to use it in an asynchronous way
 * THATs WHY we will use async await
 *
 * AND
 * WHENEVER we use async await
 * USE try-catch block
 */

export default connectDB;
