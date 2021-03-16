// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const {isLetter, isNumber} = require('../src/helper');
  function polybius(input = "", encode = true) {
    // your solution code here
    if (input == "") return false;
    let dictionary = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    if (encode) {
      input = input.toLowerCase();

      return input
        .split("")
        .map((char) => {
          if (!isLetter(char)) return char;
          if (("ij").includes(char)) return "42";
          return Object.keys(dictionary).find((key) => {
            //Searches all keys in dictionary to find char value.
            return dictionary[key] === char;
          });
        })
        .join("");
    } else {
      if (input.replace(/\D/, "").length & 1) return false; //returns false if length of all numbers is odd.
      input = input.match(/(\d{2})|(\s)/g); //regex splits input.

      return input
        .map((key) => {
          if (!isNumber(key)) return key; //preserves spaces and symbols.
          return dictionary[key];
        })
        .join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
