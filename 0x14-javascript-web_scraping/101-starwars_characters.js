#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Check if the movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Function to fetch movie details and character names
const getMovieCharacters = async () => {
  try {
    // Construct the URL for the movie API endpoint
    const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

    // Make the HTTP GET request to get movie details
    const movieResponse = await fetchAPI(movieUrl);
    const movieData = JSON.parse(movieResponse);

    // Get the array of character URLs from the movie data
    const characterUrls = movieData.characters;

    // Fetch character names sequentially and print them
    for (const characterUrl of characterUrls) {
      const characterResponse = await fetchAPI(characterUrl);
      const characterData = JSON.parse(characterResponse);
      console.log(characterData.name);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

// Function to make an HTTP GET request
const fetchAPI = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

// Call the main function to get movie characters
getMovieCharacters();
