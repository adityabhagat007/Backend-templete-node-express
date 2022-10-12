require('dotenv').config()

const config = {
	host: process.env.HOST,
	DB_URI: process.env.DB_URI,
	port: process.env.PORT,
	email: process.env.EMAIL,
	password: process.env.PASSWORD,
}

module.exports = config