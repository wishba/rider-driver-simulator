document.querySelectorAll('#keypad-number button').forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent);
  })
})