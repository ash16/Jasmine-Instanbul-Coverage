var divider = require('../../services/divider');

describe("divider tests ", function() {
    var _numberA;
    var _numberB;

    it("should return 2", function(){
        _numberA = 2
        _numberB = 1

        var result = divider.divide(_numberA, _numberB);

        expect(result).toEqual(2);
    })

    it("should return undefined", function(){
        _numberA = 2
        _numberB = 0

        var result = divider.divide(_numberA, _numberB);

        expect(result).toEqual(undefined);
    })
});