const config = require('./config.json')
const argv = require('yargs').argv

let request = require('request')
let apiKey = config.token
let city = argv.c || 'fairfield'
let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
'&units=imperial&appid=' + apiKey

request(url, function (err, response, body) {
  if (err) {
    console.log('error:', err)
  } else {
    let weather = JSON.parse(body)
    let message = 'Its ' + (weather.main.temp) + ' degrees in ' + (weather.name)
    console.log(message)
  }
})
