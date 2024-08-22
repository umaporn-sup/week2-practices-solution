// Write a function isValidPassword(password) that returns true if the password meets the following criteria:
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one number
function isValidPassword(password) {
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber
}
console.log(isValidPassword('Password123')) // true
console.log(isValidPassword('pass123')) // false
console.log(isValidPassword('PASSWORD123')) // false
console.log(isValidPassword('Pass12')) // false
