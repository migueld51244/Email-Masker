let email = document.getElementById("email-area");

function maskEmail(email) {
  if (email === "") {
    let err1 = "No email entered!";
    return (err1)
  } else if (!email.includes("@")) {
    let err2 = "Please enter a valid email"
    return err2;
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
    document.querySelector(".masked-result").innerHTML = `Masked email:
    ${value}
    `;
  }
);

