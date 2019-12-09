import test from 'ava'

/**
 * Library under test
 */

import mergeSorted from '../src/merge-sorted'


function compareNumber(a: number, b: number): number {
    return a - b
}


test('should merge two sorted arrays of same length', t => {

    const a = [1, 3, 5]
    const b = [2, 4, 6]

    t.deepEqual(
        [1, 2, 3, 4, 5, 6],
        mergeSorted(a, b, compareNumber)
    )
})

test('should merge two sorted arrays of different lengths', t => {

    const a = [1, 2, 3, 5, 6]
    const b = [4]

    t.deepEqual(
        [1, 2, 3, 4, 5, 6],
        mergeSorted(a, b, compareNumber)
    )
})

test('should return empty array when both inputs are empty', t => {

    t.deepEqual([], mergeSorted([], [], compareNumber))
})
