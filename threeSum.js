const nums = [-1, 0, 1, 2, -1, -4];

// Brute force

const threeSumBrute = (nums) => {
  let result = [];
  n = nums.length;
  nums.sort((a, b) => a - b);

  for (i = 0; i < n - 2; i++) {
    for (j = i + 1; j < n - 1; j++) {
      for (k = j + 1; k < n; k++) {
        const toPush = nums[i] + nums[j] + nums[k];
        if (nums[i] + nums[j] + nums[k] === 0 && !(toPush in result)) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};

threeSumBrute(nums);

// Optimized

const threeSum2 = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  let sum = 0;
  n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    let a = nums[i];
    if (i > 0 && a == nums[i - 1]) continue;

    let right = n - 1;
    let left = i + 1;

    while (left < right) {
      sum = a + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([a, nums[left], nums[right]]);

        left++;
        while (nums[left] == nums[left - 1] && left < right) left++;
      }
    }
  }
  return result;
};
const nums2 = [2, 2, 2, 2, 2];
threeSum2(nums2);
