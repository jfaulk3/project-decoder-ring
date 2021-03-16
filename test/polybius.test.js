// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", () => {
  it("should encode the input", () => {
    let expected = "4432423352125413";
    let actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces throughout", () => {
    let expected = "3251131343 2543241341";
    let actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  });
  it("should return a string", () => {
    let actual = polybius("thinkful");
    expect(actual).to.be.a("string");
  });
  it("should translate the letters i and j to 42 when encoding", () => {
    let expected = "4242";
    let actual = polybius("ij");
    expect(actual).to.equal(expected);
  });
  it("should translate  42 to (i/j) when decoding", () => {
    let expected = "(i/j)";
    let actual = polybius("42", false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters when decoding", () => {
    let testA = polybius("Hello world");
    let testB = polybius("hELLo woRLd");
    expect(testA).to.equal(testB);
  });
});
