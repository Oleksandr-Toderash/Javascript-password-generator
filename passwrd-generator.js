const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = false;
const includeFigures = true;

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeFigures) {
  const passwordIncludeLowercase = "abcdefghijklmnopurstyvwsqz";
  const passwordIncludeUppercase = "abcdefghijklmnopurstyvwsqz".toUpperCase();
  const passwordIncludeNumbers = "0123456789";
  const passwordIncludeFigures = "!@^&*?_-";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? passwordIncludeLowercase : "";
  allowedChars += includeUppercase ? passwordIncludeUppercase : "";
  allowedChars += includeNumbers ? passwordIncludeNumbers : "";
  allowedChars += includeFigures ? passwordIncludeFigures : "";


  if (length <= 0) {
    return "reset the length"
  }
  if (allowedChars.length === 0) {
    return "set the settings of your password"
  }
  for (let i = 0; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeFigures);

console.log(`Your password ${password}`);

