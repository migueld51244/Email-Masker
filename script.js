let email = document.getElementById("email-area");
let err1 = "No email entered!";
let err2 = "Please enter a valid email"

function maskEmail(email) {
  let result;
  if (email === "") {
    result = err1;
    return result;
  } else if (!email.includes("@")) {
    result = err2;
    return result;
  }
  let atIndex = email.indexOf('@');
  let firstChar = email[0];
  let lastChar = email[atIndex - 1];
  let domain = email.substring(atIndex);
  
  // Calculate how many characters need to be replaced with '*'
  let starsToRepeat = atIndex - 2;
  let maskedPart = '*'.repeat(starsToRepeat);
  return firstChar + maskedPart + lastChar + domain;
}

document.getElementById("submit").addEventListener(
  "click", () => {
    let extracted = email.value;
    let value = maskEmail(extracted);
    if(!value.includes("@") || !value.includes("*")) {
      return document.querySelector(".masked-result").innerHTML = `${value}`;
    }
    document.querySelector(".masked-result").innerHTML = `Masked email:
    ${value}
    `;
  }
);

