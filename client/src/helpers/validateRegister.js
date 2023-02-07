function validateUsername(username) {
  return true;
}

function validateEmail(email) {
  if (email === "" || typeof email === undefined) return false;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(emailRegex)) return false;
  return true;
}

function validatePassword(password) {
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
  if (password.length < 6 || password.length > 12) return false;
  if (!password.match(passwordRegex)) return false;
  return true;
}

export default function validateRegister(username, email, password) {
  if (
    validateUsername(username) &&
    validateEmail(email) &&
    validatePassword(password)
  )
    return true;
  return false;
}
