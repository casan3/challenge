import { expect } from "chai";
import { findFirstSum } from "../app";

const array: Array<number> = [2, 5, 14, 5, 0];
const sumResult: number = 10;

const result = findFirstSum(array,sumResult);

describe('findFirstSum()', function () {
    it('should return an array', function() {
        expect(result).to.be.an('array');
    });

    it('should return [5,5]', function() {
        expect(result).eql([5,5]);
    });
});