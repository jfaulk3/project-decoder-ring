// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    // your solution code here
    if (alphabet.length !== 26 || !isUnique(alphabet)) return false;
    let dictionary = translate(alphabet);
    input = input.toLowerCase();
    if (encode) {
      return input
        .split("")
        .map((char) => {
          if (char === " ") return " ";
          return dictionary[char];
        })
        .join("");
    } else {
      return input
        .split("")
        .map((char) => {
          if (char === " ") return " ";
          return Object.keys(dictionary).find((key) => {
            return dictionary[key] === char;
          });
        })
        .join("");
    }
  }
  function translate(alphabet) {
    //Create a hash map connecting the standard alphabet with the custom one.
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let translation = {};
    for (let i = 0; i < 26; i++) {
      translation[letters[i]] = alphabet[i];
    }
    return translation;
  }
  function isUnique(array) {
    //function takes in an array. Will return false if elements are not unique.
    if (array.length === 0) return true;
    let storage = {};
    for (element of array) {
      if (storage.hasOwnProperty(element)) {
        return false;
      } else {
        storage[element] = true;
      }
    }
    return true;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
