/**
 * @const {number[]} array
 */
const array = [9, 10, 13, 226, 78, 100, 143, 201];

/**
 *
 * @param {number[]} array
 * @param {number} numberToAdd
 * @returns {number[] | any}
 */
const findIndexToAdd = (array, numberToAdd, start = 0, end = array.length) => {
    //validates array and number
    if (!array || array.length === 0 ||
        isNaN(numberToAdd)) {
        return null;
    }

    let indexMin = start;
    let indexMax = end;

    let mid = indexMin + (indexMax - indexMin) / 2;

    if (indexMax - indexMin <= 1 || array[mid] === numberToAdd) return mid;

    if (array[mid] < numberToAdd) {
        return findIndexToAdd(array, numberToAdd, mid, end);
    } else {
        return findIndexToAdd(array, numberToAdd, start, mid);
    }
};


const addToSortedArr = (array, numberToAdd) => {
    return array.splice((findIndexToAdd(array, numberToAdd) + 1).toFixed(), 0, numberToAdd);
};
