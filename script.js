const input = document.getElementById('input');
const result = document.getElementById('result');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  input.value >= 101
    ? (result.textContent = 'Input nothing more than 100')
    : input.value >= 70
    ? (result.textContent = 'A')
    : input.value >= 60
    ? (result.textContent = 'B')
    : input.value >= 50
    ? (result.textContent = 'C')
    : input.value >= 45
    ? (result.textContent = 'D')
    : input.value >= 40
    ? (result.textContent = 'E')
    : (result.textContent = 'F');
});
