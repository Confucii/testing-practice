function translateLetter(letter, shift) {
  let letterCode = letter.codePointAt(0);

  if (letterCode >= 65 && letterCode <= 90) {
    letterCode = ((letterCode - 65 + shift) % 26) + 65;
  } else if (letterCode >= 97 && letterCode <= 122) {
    letterCode = ((letterCode - 97 + shift) % 26) + 97;
  }

  const cryptLetter = String.fromCharCode(Math.abs(letterCode));

  return cryptLetter;
}

export default function caesarCipher(str, shift) {
  const alphabetical = str.split("");
  let cipher = alphabetical;
  let shiftNum = shift ? shift % 26 : 0;

  if (shift < 0) {
    shiftNum = 26 + shiftNum;
  }

  if (shift) {
    cipher = alphabetical.map((elem) => translateLetter(elem, shiftNum));
  }

  return cipher.join("").trim();
}
