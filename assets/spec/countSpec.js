describe("count function", function() {
    it("it should be 1", function() {
        let a = "€0-750";
        count(a);
        expect(belgium.score).toBe(1);
    });
});