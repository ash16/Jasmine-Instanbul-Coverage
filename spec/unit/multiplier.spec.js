var multiplier = require('../../services/multiplier');

describe("multiplier tests ", function() {
    var _numberA;
    var _numberB;

    it("should return numberA multiple numberB", function() {
        _numberA = 2;
        _numberB = 2;
        var result = multiplier.multiple(_numberA, _numberB);

        expect(result).toEqual(3);
    });

    it("should return undefined for numberA equals undefined", function() {
        _numberA = undefined;
        _numberB = 2;
        var result = multiplier.multiple(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });
});