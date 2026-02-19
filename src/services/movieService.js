import Movie from '../models/Movie.js';

const API_URL = './db.json';

export async function getMovies() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.movies.map(
    movie => new Movie(movie.id, movie.title, movie.price)
  );
}
