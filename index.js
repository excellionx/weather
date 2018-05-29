const config = require("./config.json");
let request = require('request');
let apiKey = config.token;
let city = 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + apiKey;


request(url, function(err, response, body) {
	if(err) {
		console.log('error:', error);
	} else {
		console.log('body:', body);
	}
});

