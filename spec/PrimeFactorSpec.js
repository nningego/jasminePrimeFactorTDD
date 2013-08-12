describe("PrimeFactor", function() {


    it("should return two as prime factor of two", function() {

        var primeFactor = new PrimeFactor();
        var result  = primeFactor.factor(2);

        expect(result).toEqual([2]);
    });

    it("should return two and three as prime factor of six", function() {

        var primeFactor = new PrimeFactor();
        var result  = primeFactor.factor(6);

        expect(result).toEqual([2, 3]);
    });

    it("should return two, two and three as prime factor of 12", function() {

        var primeFactor = new PrimeFactor();
        var result  = primeFactor.factor(12);

        expect(result).toEqual([2,2,3]);
    });


    it("should return 2,2,2,2,5,11 as prime factor of 880", function() {

        var primeFactor = new PrimeFactor();
        var result  = primeFactor.factor(880);

        expect(result).toEqual([2,2,2,2,5,11]);
    });

});