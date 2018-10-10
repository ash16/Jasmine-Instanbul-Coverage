var divider = require('../../services/divider');

describe("divider tests ", function() {
    var _numberA;
    var _numberB;


    it("should return 2", function(){
        _numberA = 1
        _numberB = 2

        var result = divider.divide(_numberA, _numberB);

        expect(result).toEqual(2);
    })
});