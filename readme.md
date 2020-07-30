# merge-sorted [![Build status](https://travis-ci.org/strong-roots-capital/merge-sorted.svg?branch=master)](https://travis-ci.org/strong-roots-capital/merge-sorted) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/merge-sorted.svg)](https://npmjs.org/package/@strong-roots-capital/merge-sorted) [![codecov](https://codecov.io/gh/strong-roots-capital/merge-sorted/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/merge-sorted)

> Merge two sorted arrays in O(n) time and O(n) space

## Install

```shell
npm install @strong-roots-capital/merge-sorted
```

## Use

```typescript
import mergeSorted from '@strong-roots-capital/merge-sorted'

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
```

## Contributors

- [Alexey Gusev](https://github.com/mad-gooze)

## Acknowledgments

- Many thanks to William Vincent's [blog post](https://wsvincent.com/javascript-merge-two-sorted-arrays/)

## Index

### Functions

* [mergeSorted](README.md#mergesorted)

## Functions

###  mergeSorted

▸ **mergeSorted**‹**T**›(`a`: T[], `b`: T[], `comparator`: function): *T[]*

*Defined in [merge-sorted.ts:12](https://github.com/strong-roots-capital/merge-sorted/blob/4dc5463/src/merge-sorted.ts#L12)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *T[]*

▪ **b**: *T[]*

▪ **comparator**: *function*

▸ (`a`: T, `b`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *T[]*

Sorted array containing all elements of `a` and `b`
