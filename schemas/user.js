const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
	userid: {
		type: String,
		required: true,
		unique: true,
	},
	age: {
		type: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
module.exports = mongoose.model('User', userSchema);