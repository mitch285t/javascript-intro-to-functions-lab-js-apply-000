var uppercase = " HELLO "
uppercase.toUpperCase() === uppercase
var lowercase = 'hello'
lowercase.toLowerCase() === lowercase
var mixedcase = 'Hi there!'
mixedcase.toUpperCase() === mixedcase
mixedcase.toLowerCase() === mixedcase
function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(uppercase)
}