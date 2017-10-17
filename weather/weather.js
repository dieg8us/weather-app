const request = require('request');

// https://api.darksky.net/forecast/1bf4dd22744cd3cd3a87be912d18e425/37.8267,-122.4233
// 1bf4dd22744cd3cd3a87be912d18e425

// get weather function
let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/1bf4dd22744cd3cd3a87be912d18e425/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    // console.log( JSON.stringify(response, undefined, 2) );
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback( 'Unable to fetch weather.');
    }
  });
};

// export get weather
module.exports = {
  getWeather
};
