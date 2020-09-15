const sum = (a, b) => a + b;

describe('A unit test', () => {

    it('Should be able to run against es modules', () => {
        expect(sum(2, 2)).toEqual(4);
    });

});