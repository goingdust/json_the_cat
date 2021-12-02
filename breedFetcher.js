const request = require('request');
const breedRequest = process.argv.slice(2);
// turn the breed string passed into the terminal into a 4-character query ('Sibe' for 'Siberian')
const query = breedRequest[0].substring(0, 4);

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  // turn string body content into an object with JSON
  const data = JSON.parse(body);
  // if URL is wrong, print error message and stop function
  if (error) {
    console.log(error);
    return;
  }
  // if the breed is not found, print a message and stop function
  if (!data[0]) {
    console.log('Sorry, breed not found... 😵‍💫');
    return;
  }
  // print the description of the breed
  console.log(data[0].description);
});