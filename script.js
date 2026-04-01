let keyCode = []

document.getElementById('keypad-enter').addEventListener('click', () => {
  console.log('ENTER: ' + keyCode)
  keyCode = []
})

document.querySelectorAll('#keypad-number button').forEach((btn) => {
  btn.addEventListener('click', () => {
    keyCode.push(btn.textContent.trim())
    console.log(keyCode)
  })
})