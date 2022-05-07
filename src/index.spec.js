import { greet } from ".";

describe("index.js", () => {
  describe("greet()", () => {
    it("should return greeting with given name.", () => {
      expect(greet("Daniel")).toBe("Hello Daniel!");
    });
  });
});
