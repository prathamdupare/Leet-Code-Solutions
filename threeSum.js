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

const threeSum2 = (nums, target) => {
  let result = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        }
      }
    }
  }

  console.log(result);
};
const nums2 = [2, 2, 2, 2, 2];
threeSum2(nums2);
