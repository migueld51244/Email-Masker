let email = document.getElementById("email-area");

function maskEmail(email) {
  let atIndex = email.indexOf('@');
  let firstChar = email[0];
  let lastChar = email[atIndex - 1];
  let domain = email.substring(atIndex);
  
  // Calculate how many characters need to be replaced with '*'
  let starsToRepeat = atIndex - 2;
  let maskedPart = '*'.repeat(starsToRepeat);
  console.log(firstChar + maskedPart + lastChar + domain);
  return firstChar + maskedPart + lastChar + domain;
}

document.getElementById("submit").addEventListener(
  "click", () => {
    let value = email.value;
    maskEmail(value);
  }
);
