require('dotenv').config();
const mongoose = require("mongoose");

module.exports = () => {
	const connect = () => {
		mongoose.connect(
		`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:${process.env.DB_PORT}`, 
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: 'test'
		}, (err) => {
			if(err) console.log(err);
			else console.log("몽고디비 연결 성공");
		});
	}
	connect();
}