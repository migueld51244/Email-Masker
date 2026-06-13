function maskEmail(email) {
  let atIndex = email.indexOf('@');
  let firstChar = email[0];
  let lastChar = email[atIndex - 1];
  let domain = email.substring(atIndex);
  
  // Calculate how many characters need to be replaced with '*'
  let starsToRepeat = atIndex - 2;
  let maskedPart = '*'.repeat(starsToRepeat);
  
  return firstChar + maskedPart + lastChar + domain;
}

const email = 'miguel34474@esfundao.pt';
console.log(maskEmail(email));
