export const findFirstSum = (array: Array<number>, sumResult: number ): Array<number> | string => {
    const result: Array<number> = [];
    const aux: Object = {};

    for (const number of array) {
        const neededNumber: number = sumResult - number;
        if (aux[number]) {
            result.push(aux[number], number);
            return result;
        }
        aux[neededNumber] = number;
    }

    return `No pair of numbers that sum ${sumResult} where found`;
}

const array: Array<number> = [2, 5, 8, 14, 0];
const sumResult: number = 10;

console.log(findFirstSum(array, sumResult));