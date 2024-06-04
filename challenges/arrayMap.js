function hasContiguousSum(arr, target) {
  let sum = 0; // Initialize a variable to store the current sum of the subarray
  let left = 0; // Initialize a variable to track the left index of the subarray

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > target) {
      sum -= arr[left]; // Subtract the leftmost element from the sum when sum is greater than target
      left++; // Increment left index by one
    }

    if (sum === target) {
      return true;
    }
  }

  return false; // return false If no subarray sum matches the target.
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 13;
console.log(hasContiguousSum(arr, target));
