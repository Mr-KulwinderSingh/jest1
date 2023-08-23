const addition = require("../calc");

describe("calculator tests",() => {
    describe("Addition tests", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 73 for 31 + 42", () => {
            expect(addition(31,42)).toBe(73);
        });

    });
    describe("Subtration tests", () => {

    })
    describe("Sultiply tests", () => {

    })
    describe("Division tests", () => {

    })

})

