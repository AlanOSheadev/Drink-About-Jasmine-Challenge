describe("whatCanIDrink", function() {

    beforeEach(function() {
        age = new whatCanIDrink();
    });

    describe("Check age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink()", function() {
            var result = whatCanIDrink(-1)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return Drink Toddy when called as whatCanIDrink(13)", function(){
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("should return Drink Coke when called as whatCanIDrink(16)", function(){
            var result = whatCanIDrink(16)
            expect(result).toBe("Drink Coke");
        });
        it("should return Drink Beer when called as whatCanIDrink(20)", function(){
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
        it("should return Drink Whiskey when called as whatCanIDrink(45)", function(){
            var result = whatCanIDrink(45)
            expect(result).toBe("Drink Whiskey");
        });
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});