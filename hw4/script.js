function findKthElement(arr1, arr2, k) {
  let i = 0, 
  j = 0, 
  count = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result = arr1[i]
      i++
    } else {
      result = arr2[j]
      j++
    }
    count++

    if (count === k) return result
  }

  while (i < arr.length) {
    result = arr[i]
    i++
    count++
    if (count === k) return result
  }

  while (j < arr2.length) {
    result = arr2[j]
    j++
    count++
    if (count === k) return result
  }
  return -1
}

const arr1 = [100, 112, 256, 349, 770]
const arr2 = [72, 86, 113, 119, 265, 445, 892]

console.log(findKthElement(arr1, arr2, 7))