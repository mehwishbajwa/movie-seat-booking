export function setupSeats(container, updateSummary, movieSelect) {
  container.addEventListener('click', event => {
    const seat = event.target;

    if (!movieSelect.value) return;

    if (seat.classList.contains('seat') && !seat.classList.contains('occupied')) {
      seat.classList.toggle('selected');
      updateSummary();
    }
  });
}
