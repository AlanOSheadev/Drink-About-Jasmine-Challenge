describe("whatCanIDrink", function() {
    describe("Additional tests", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink()", function() {
            var result = whatCanIDrink(-1)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
    });
});