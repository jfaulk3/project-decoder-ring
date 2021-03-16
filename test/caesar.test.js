// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should shift the input to the right if a positive shift value is given", () => {
    let expected = "wklqnixo";
    let actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });
  it("should shift the input to the left if a negative shift value is given", () => {
    let expected = "qefkhcri";
    let actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });
  it("should decode the input if a third argument of false is provided", () => {
    let expected = "thinkful";
    let actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding input", () => {
    let expected = "bpqa qa i amkzmb umaaiom!";
    let actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when decoding input", () => {
    let expected = "this is a secret message!";
    let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift value is not present", () => {
    let actual = caesar("thinkful");
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is equal to 0", () => {
    let actual = caesar("thinkful", 0);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is less than -25", () => {
    let actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is greater than 25", () => {
    let actual = caesar("thinkful", 99);
    expect(actual).to.be.false;
  });
  it("should wrap around the alphabet when shifting right.", () => {
    let actual = caesar("xyz", 3);
    let expected = "abc";
    expect(actual).to.equal(expected);
  });
  it("should wrap around the alphabet when shifting left.", () => {
    let actual = caesar("abc", -3);
    let expected = "xyz";
    expect(actual).to.equal(expected);
  });
  it("should ignore captial letters", () => {
    let testA = caesar("thinkful", 12);
    let testB = caesar("ThINkfUl", 12);
    expect(testA).to.equal(testB);
  });
});
