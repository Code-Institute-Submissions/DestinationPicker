describe("count function", function() {   
    
    afterEach(function() {
        belgium.score = 0;
        iceland.score = 0;
        italy.score = 0;
        finland.score = 0;
        madagascar.score = 0;
        namibia.score = 0;
    });
    
    describe("answer €0-750", function() {
        
        it("Belgiums score should be 1", function() {
            count("€0-750");
            expect(belgium.score).toBe(1);
        });

        it("Iceland score should be 0", function() {
            count("€0-750");
            expect(iceland.score).toBe(0);
        });

        it("Italy score should be 0", function() {
            count("€0-750");
            expect(italy.score).toBe(0);
        });

        it("Finland score should be 0", function() {
            count("€0-750");
            expect(finland.score).toBe(0);
        });

        it("Madagascar score should be 0", function() {
            count("€0-750");
            expect(madagascar.score).toBe(0);
        });

        it("Namibia score should be 0", function() {
            count("€0-750");
            expect(namibia.score).toBe(0);
        });
    });

    describe("answer hot", function() {
        
        it("Belgiums score should be 0", function() {
            count("Hot");
            expect(belgium.score).toBe(0);
        });

        it("Iceland score should be 0", function() {
            count("Hot");
            expect(iceland.score).toBe(0);
        });

        it("Italy score should be 1", function() {
            count("Hot");
            expect(italy.score).toBe(1);
        });

        it("Finland score should be 0", function() {
            count("Hot");
            expect(finland.score).toBe(0);
        });

        it("Madagascar score should be 1", function() {
            count("Hot");
            expect(madagascar.score).toBe(1);
        });

        it("Namibia score should be 1", function() {
            count("Hot");
            expect(namibia.score).toBe(1);
        });
    });
});