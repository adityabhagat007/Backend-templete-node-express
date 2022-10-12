const configDev =require('./config-dev');
const configProd = require('./config-prod');

require('dotenv').config();

let config ={};

if (process.env.NODE_ENV === 'dev') {
	config = { ...configDev };
} else if (process.env.NODE_ENV === "prod") {
	config = { ...configProd };
}

module.exports =  config;

