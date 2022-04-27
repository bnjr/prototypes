// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * Merges two arrays of objects.
 * @param {[]} original Original array data.
 * @param {[]} newdata New array data to be appended to original
 * @param {string} uniqueSelector attribute key to select unique elements.
 */
export const mergeArrayOfObjects = (
  original: any,
  newdata: any,
  uniqueSelector = '',
) => {
  newdata.forEach((dat: any) => {
    const foundIndex = original.findIndex(
      (ori: any) => ori[uniqueSelector] === dat[uniqueSelector],
    )
    if (foundIndex >= 0) original.splice(foundIndex, 1, dat)
    else original.push(dat)
  })

  return original
}

export function createEntity<T>(type: {new (r: any): T}, data: any): T {
  return new type(data)
}
