function maskEmail(email) {
  let result;
  if (email === "") {
    const err1 = "No email entered!";
    result = err1;
    return result;
  } else if (!email.includes("@")) {
    const err2 = "Please enter a valid email";
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
    let input = document.getElementById("email-area");
    let email = input.value;
    let value = maskEmail(email);
    if(!value.includes("@") || !value.includes("*")) {
      return document.querySelector(".masked-result").innerHTML = `${value}`;
    }
    document.querySelector(".masked-result").innerHTML = `Masked email:
    ${value}
    `;
  }
);

