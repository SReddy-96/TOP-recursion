// merge sort algorithm

function merge_sort(array) {
  if (array.length > 1) {
    let middle = Math.floor(array.length / 2); //  round the middle down to get the middle

    let left = array.slice(0, middle); // make a copy of the left side of the array
    let right = array.slice(middle, array.length); // make a copy of the right side of the array
    merge_sort(left);
    merge_sort(right);
    merge(array, left, right);
  }
}

function merge(array, left, right) {
  let i = 0; // keep track of left
  let j = 0; // keep track of right
  let k = 0; // keep track of array

    // sorting if both the left and right still have numbers in them
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

    // if left is bigger 
  while (i < left.length) {
    array[k] = left[i];
    i++;
    k++;
  }

    // if right is bigger
  while (j < right.length) {
    array[k] = right[j];
    j++;
    k++;
  }
}

const array = [5, 3, 6, 4, 2, 1];
const array1 = [44, 55, 3, 2, 77, 88, 100, 33];
const array2 = [3, 2, 1, 13, 8, 5, 0, 1]

merge_sort(array);
merge_sort(array1);
merge_sort(array2)

console.log(array);
console.log(array1);
console.log(array2)
