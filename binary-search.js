// Binary search
/** @constant
 *   @type {number []}
 *  @default
 */
// Generate an array of 100 random numbers
const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));

/**
 *
 * @param {number[]} data
 * @param {number} inputNumber
 * @returns {number}
 */
export const binarySearch = (data, inputNumber) => {
    // checks if data and input number exists
    if (!data || data.length === 0 ||
        !isNaN(inputNumber)) {
        return -1;
    }

    // assume the array is not sorted
    data.sort((a, b) => a - b);

    let indexMin = 0;
    let indexMax = data.length - 1;

    while (indexMin <= indexMax) {
        // needs to find the middle of the data array
        // where N is the length
        const middle = Math.floor((indexMin + indexMax) / 2);

        if (inputNumber === data[middle]) {
            return middle; // returns array position
        } else if (inputNumber > data[middle]) {
            indexMin = middle + 1;
        } else {
            indexMax = middle - 1;
        }
    }
    return -1; // returns -1 if not found
};

console.log(binarySearch(array, Math.floor(Math.random() * 101)));
