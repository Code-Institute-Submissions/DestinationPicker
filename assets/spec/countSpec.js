describe("count function", function() {   
    
    afterEach(function() {
        belgium.score = 0;
        iceland.score = 0;
        italy.score = 0;
        finland.score = 0;
        madagascar.score = 0;
        namibia.score = 0;
    });
    
    describe("answers €0-750, Nature, Winter, Short, Normal, Car and A little", function() {
        
        it("Belgiums score should be 4", function() {
            count("€0-750");
            count("Nature");
            count("Winter");
            count("Short");
            count("Normal");
            count("Car");
            count("A little");
            expect(belgium.score).toBe(4);
        });

        it("Iceland score should be 3", function() {
            count("€0-750");
            count("Nature");
            count("Winter");
            count("Short");
            count("Normal");
            count("Car");
            count("A little");
            expect(iceland.score).toBe(3);
        });

        it("Italy score should be 2", function() {
            count("€0-750");
            count("Nature");
            count("Winter");
            count("Short");
            count("Normal");
            count("Car");
            count("A little");
            expect(italy.score).toBe(2);
        });

        it("Finland score should be 3", function() {
            count("€0-750");
            count("Nature");
            count("Winter");
            count("Short");
            count("Normal");
            count("Car");
            count("A little");
            expect(finland.score).toBe(3);
        });

        it("Madagascar score should be 1", function() {
            count("€0-750");
            count("Nature");
            count("Winter");
            count("Short");
            count("Normal");
            count("Car");
            count("A little");
            expect(madagascar.score).toBe(1);
        });

        it("Namibia score should be 1", function() {
            count("€0-750");
            count("Nature");
            count("Winter");
            count("Short");
            count("Normal");
            count("Car");
            count("A little");
            expect(namibia.score).toBe(1);
        });
    });

    describe("answers €750-1500, Combination, Spring, Long, Hot, Plane and A lot", function() {
        
        it("Belgiums score should be 1", function() {
            count("€750-1500");
            count("Combination");
            count("Spring");
            count("Long");
            count("Hot");
            count("Plane");
            count("A lot");
            expect(belgium.score).toBe(1);
        });

        it("Iceland score should be 2", function() {
            count("€750-1500");
            count("Combination");
            count("Spring");
            count("Long");
            count("Hot");
            count("Plane");
            count("A lot");
            expect(iceland.score).toBe(2);
        });

        it("Italy score should be 4", function() {
            count("€750-1500");
            count("Combination");
            count("Spring");
            count("Long");
            count("Hot");
            count("Plane");
            count("A lot");
            expect(italy.score).toBe(4);
        });

        it("Finland score should be 2", function() {
            count("€750-1500");
            count("Combination");
            count("Spring");
            count("Long");
            count("Hot");
            count("Plane");
            count("A lot");
            expect(finland.score).toBe(2);
        });

        it("Madagascar score should be 5", function() {
            count("€750-1500");
            count("Combination");
            count("Spring");
            count("Long");
            count("Hot");
            count("Plane");
            count("A lot");
            expect(madagascar.score).toBe(5);
        });

        it("Namibia score should be 4", function() {
            count("€750-1500");
            count("Combination");
            count("Spring");
            count("Long");
            count("Hot");
            count("Plane");
            count("A lot");
            expect(namibia.score).toBe(4);
        });
    });

});