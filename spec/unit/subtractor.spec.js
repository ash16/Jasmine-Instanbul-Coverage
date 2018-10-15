var subtractor = require('../../services/subtractor');

describe("subtractor tests ", function() {
    var _numberA;
    var _numberB;

    it("should return numberA minus numberB", function() {
        _numberA = 5;
        _numberB = 2;
        var result = subtractor.subtract(_numberA, _numberB);

        expect(result).toEqual(3);
    });

    it("should return undefined for numberA equals undefined", function() {
        _numberA = undefined;
        _numberB = 2;
        var result = subtractor.subtract(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });
});