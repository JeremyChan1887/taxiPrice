const main = require('../main/main');

describe('taxi fee', function () {
    it('invalid inputs' , function() {
        let inputs = {distance:'1',parkTime:5};
        let summary = main(inputs);
        let expected = NaN;
        expect(summary).toEqual(expected);
    }); 
	it('invalid inputs' , function() {
        let inputs = {distance:-5,parkTime:5};
        let summary = main(inputs);
        let expected = NaN;
        expect(summary).toEqual(expected);
    }); 
	it('between 2km and 8km and parking' , function() {
        let inputs = {distance:6.5,parkTime:7}; //6+0.25*7+(6.5-2)*0.8=11.35
        let summary = main(inputs);
        let expected = 11;
        expect(summary).toEqual(expected);
    }); 
	
	it('within 2km and parking' , function() {
        let inputs = {distance:1,parkTime:5};
        let summary = main(inputs);
        let expected = 7;
        expect(summary).toEqual(expected);
    }); 
    it('between 2km and 8km and parking' , function() {
        let inputs = {distance:7,parkTime:10};
        let summary = main(inputs);
        let expected = 13;
        expect(summary).toEqual(expected);
    }); 
    it('more than 8km and parking' , function() {
        let inputs = {distance:10,parkTime:20};
        let summary = main(inputs);
        let expected = 18;
        expect(summary).toEqual(expected);
    }); 
    it('more than 8km and no parking' , function() { 
        let inputs = {distance:15,parkTime:0}; 
        let summary = main(inputs);
        let expected = 19;
        expect(summary).toEqual(expected);
    }); //19.2
});
