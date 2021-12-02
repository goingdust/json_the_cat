const request = require('request');

const fetchBreedDescription = (query, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
    // turn string body content into an object with JSON
    const data = JSON.parse(body);
    // if URL is wrong, print error message and stop function
    if (error) {
      callback(error);
      return;
    }
    // if the breed is not found, print a message and stop function
    if (!data[0]) {
      callback(null, 'Sorry, breed not found... 😵‍💫');
      return;
    }
    // print the description of the breed
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };