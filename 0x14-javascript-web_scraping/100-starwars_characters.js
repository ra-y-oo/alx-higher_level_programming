#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Check if the movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Construct the URL for the movie API endpoint
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make the HTTP GET request to get movie details
request(movieUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Parse the response body to JSON
  const movieData = JSON.parse(body);

  // Check if the movie ID exists
  if (response.statusCode === 404) {
    console.error(`Movie with ID ${movieId} not found.`);
    process.exit(1);
  }

  // Get the array of character URLs from the movie data
  const characterUrls = movieData.characters;

  // Function to get the character name from the character URL
  const getCharacterName = (url) => {
    request(url, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        return;
      }

      // Parse the character data to JSON
      const characterData = JSON.parse(body);

      // Extract and print the character name
      const characterName = characterData.name;
      console.log(characterName);
    });
  };

  // Loop through character URLs and fetch character names
  characterUrls.forEach((characterUrl) => {
    getCharacterName(characterUrl);
  });
});
