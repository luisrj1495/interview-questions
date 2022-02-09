/**
 * 
 * sebas rami16:29
Having a list of n digits (0 <= digit <= 9), where n less than or equal to 100, arrange it to move all 0 to right in O (n) time.

Example [4, 8, 0, 9, 2, 5, 0, 3, 3, 0] -> [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]

You must display this list in the console.

After this, the previous list without zeros ([4, 8, 9, 2, 5, 3, 3]) will represent a fictitious integer (4892533). 
You should add 1 unit to it, leaving the final list as [4, 8, 9, 2, 5, 3, 4]. You must display this list in the console.

Finally, multiply by -1 each digit in even position of the array without zeros. After this, detect the sub-array, 
whose sum of digits is the maximum and return this sum. Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 13. 
You must display the sum in the console.
 * 
 * 
 * 
 * 
 * 
 */

const target = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];

const moveZerosToLast1 = (nums) => {
  const numbersWithoutZeros = [...nums];

  for (let i = 0; i < nums.length; i++) {
    if (numbersWithoutZeros[i] === 0) {
      numbersWithoutZeros.splice(i, 1);
      numbersWithoutZeros.push(0);
    }
  }

  return numbersWithoutZeros;
};

const moveZerosToLast2 = (nums) => {
  const numbersWithoutZeros = nums.filter((num) => num !== 0);
  const zerosLength = Math.abs(numbersWithoutZeros.length - nums.length);
  const zeros = Array.from({ length: zerosLength }, () => 0);

  numbersWithoutZeros.push(...zeros);

  return numbersWithoutZeros;
};

const sumToArray = (nums) => {
  return (+nums.join("") + 1).toString().split("");
};

const multiplyEven = (nums) => {
  for (let i = 0; i < nums.length; i += 2) {
    nums[i] *= -1;
  }

  return nums;
};

const maximumSubarrayBruteForce = (nums) => {
  /**
   * Bad solution - O(n^2)
   */
  let max = -10e5;

  for (let i = 0; i < nums.length; i++) {
    let amount = 0;
    for (let j = i; j < nums.length; j++) {
      amount += nums[j];

      if (amount > max) max = amount;
    }
  }

  return max;
};

/**
 * Best solution using Kadane's Algorithm
 *
 */
const maximumSubarrayKadanesAlgorithm = (nums) => {
  let maxSum = nums[0];
  let currentSum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
// [-4, 8, -9, 2,]

// maxSum = -4
// currenSum = -4;

// currenSum = 8;
// maxSum = 8

// currenSum = -1;
// maxSum = 8

// currenSum = 2;
// maxSum = 8

function strstr(s, x) {
  for (let i = 0; i < s.length; i++) {
    if (x == s.slice(i, i + x.length)) return i;
  }

  return -1;
}
