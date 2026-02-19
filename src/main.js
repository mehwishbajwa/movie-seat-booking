import { getMovies } from './services/movieService.js';
import { setupSeats } from './ui/seats.js';

const movieSelect = document.getElementById('movie');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');
const container = document.querySelector('.container');

let ticketPrice = 0;

async function loadMovies() {
  const movies = await getMovies();

  // Add movies to dropdown
  movies.forEach(movie => {
    const option = document.createElement('option');
    option.value = movie.price;
    option.textContent = `${movie.title} (${movie.price} kr)`;
    movieSelect.appendChild(option);
  });
}

function updateSummary() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const count = selectedSeats.length;

  countEl.textContent = count;
  totalEl.textContent = count * ticketPrice;
}

// Update ticket price on movie selection
movieSelect.addEventListener('change', e => {
  if (!e.target.value) return;
  ticketPrice = +e.target.value;
  updateSummary();
});

// Setup seats
setupSeats(container, updateSummary, movieSelect);

// Load movies
loadMovies();
