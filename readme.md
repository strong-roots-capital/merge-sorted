
merge-sort [![Build status](https://travis-ci.org/strong-roots-capital/merge-sort.svg?branch=master)](https://travis-ci.org/strong-roots-capital/merge-sort) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/merge-sort.svg)](https://npmjs.org/package/@strong-roots-capital/merge-sort) [![codecov](https://codecov.io/gh/strong-roots-capital/merge-sort/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/merge-sort)
=====================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Merge two sorted arrays in O(n) time and O(n) space

Install
-------

```shell
npm install @strong-roots-capital/merge-sort
```

Use
---

```typescript
import merge-sort from '@strong-roots-capital/merge-sort'

function compareNumber(a: number, b: number): number {
    return a - b
}

test('should merge two sorted arrays of same length', t => {

    const a = [1, 3, 5]
    const b = [2, 4, 6]

    t.deepEqual(
        [1, 2, 3, 4, 5, 6],
        mergesort(a, b, compareNumber)
    )
})

test('should merge two sorted arrays of different lengths', t => {

    const a = [1, 2, 3, 5, 6]
    const b = [4]

    t.deepEqual(
        [1, 2, 3, 4, 5, 6],
        mergesort(a, b, compareNumber)
    )
})

test('should return empty array when both inputs are empty', t => {

    t.deepEqual([], mergesort([], [], compareNumber))
})
```

Acknowledgments
---------------

*   All credits to William Vincent's [blog post](https://wsvincent.com/javascript-merge-two-sorted-arrays/)

## Index

### Functions

* [mergesort](#mergesort)

---

## Functions

<a id="mergesort"></a>

###  mergesort

▸ **mergesort**<`T`>(a: *`T`[]*, b: *`T`[]*, comparator: *`function`*): `T`[]

*Defined in [merge-sort.ts:18](https://github.com/strong-roots-capital/merge-sort/blob/1df63c5/src/merge-sort.ts#L18)*

Merged two sorted arrays in O(n) time and O(n) space.

*__remarks__*: Behavior is undefined when input-arrays are not already sorted.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `T`[] |  One sorted array to be merged with \`b\` |
| b | `T`[] |  One sorted array to be merged with \`a\` |
| comparator | `function` |  Function used to sort elements of input arrays |

**Returns:** `T`[]
Sorted array containing all elements of `a` and `b`

___

