// BruteForce

nums = [3, 2, 4];
target = 6;
const twoSum = (nums, target) => {
  n = nums.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i); // store the indices of the two numbers
        result.push(j);
      }
    }
    if (result.length > 0) break;
  }

  console.log(result);
  return result;
};

// Optimized with O_n
