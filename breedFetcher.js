const request = require('request');
const breedRequest = process.argv.slice(2);
const query = breedRequest[0].substring(0, 4);

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
    return;
  }
  if (!data[0]) {
    console.log('Sorry, breed not found... 😵‍💫');
    return;
  }
  console.log(data[0].description);
});