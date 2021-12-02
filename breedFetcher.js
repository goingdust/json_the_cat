const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  // turn breedName into a 4-character query ('Sibe' for 'Siberian')
  const query = breedName.substring(0, 4);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
    // turn string body content into an object with JSON
    const data = JSON.parse(body);
    // if URL does not exist, print error message and stop function
    if (error) {
      callback(error);
      return;
    }
    // if the breed is not found, print a message and stop function
    if (!data[0]) {
      error = 'Sorry, breed not found... 😵‍💫';
      callback(error);
      return;
    }
    // print the description of the breed
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };