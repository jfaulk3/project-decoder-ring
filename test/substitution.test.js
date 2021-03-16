// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if alphabet isn't exactly 26 characters long", () => {
    let actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
  it("should encode the message properly", () => {
    let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    let expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should decode the message properly", () => {
    let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    let expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    let testA = substitution("ThiNKFul", "xoyqmcgrukswaflnthdjpzibev");
    let testB = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(testA).to.equal(testB);
  });
  it("should maintain spaces in the message.", () => {
    let actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    let expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
});
