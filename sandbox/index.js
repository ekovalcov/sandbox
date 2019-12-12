'use strict'

const binSearch = (key, array, leftIndex = 0, rightIndex = array.length - 1) => {
    if (leftIndex === rightIndex) {
        return array[leftIndex] === key ? leftIndex : -1
    }

    const median = Math.round((rightIndex + leftIndex) / 2);
    if(array[median] === key) {
        return median
    }
    
    return key > array[median] ? binSearch(key, array, median + 1, rightIndex) : binSearch(key, array, leftIndex, median - 1)
}

module.exports = {
    binSearch
}