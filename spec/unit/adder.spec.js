var adder = require('../../services/adder');

describe("adder tests ", function() {
    var _numberA;
    var _numberB;

    it("should return numberA plus numberB", function() {
        _numberA = 1;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(3);
    });

    it("should return undefined for numberA plus numberB", function() {
        _numberA = undefined;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });
});