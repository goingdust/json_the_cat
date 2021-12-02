const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
// turn breedName into a 4-character query ('Sibe' for 'Siberian')
const query = breedName.substring(0, 4);

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});