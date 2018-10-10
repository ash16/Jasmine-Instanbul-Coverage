var adder = require('../../services/adder');

describe("adder tests ", function() {
    var _numberA;
    var _numberB;

    beforeEach(function() {
    });

    it("should return numberA pulse numberB", function() {
        _numberA = 1;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(3);
    });
});