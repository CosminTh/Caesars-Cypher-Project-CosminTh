/* A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let answer = ""
  for (let i = 0; i < str.length; i++){
    if (alphabet.indexOf(str[i]) >= 13){
      answer += alphabet[alphabet.indexOf(str[i])-13]
    } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1){
      answer += alphabet[alphabet.indexOf(str[i])+13]
    } else {
      answer += str[i]
    }
  }
  return answer;
}

console.log(rot13("SERR PBQR PNZC"));