// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || shift === 0) return false; //Guard clause

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    shift *= encode ? 1 : -1;
    return input
      .split("")
      .map((char) => {
        if (!alphabet.includes(char)) return char;

        const newVal = (alphabet.indexOf(char) + shift) % 26;

        return newVal >= 0
          ? alphabet[newVal]
          : alphabet[alphabet.length + newVal]; //Start from the end of the array.
      })
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
