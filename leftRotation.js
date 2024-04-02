const rotateLeft = (d, arr) => {
  const n = arr.length;

  let rotatedArray = new Array(n);

  for (let i = 0; i < n; i++) {
    const newIndex = (i - d + n) % n;

    rotatedArray[newIndex] = arr[i];
  }

  return rotatedArray;
};

// Example usage:
const d = 4;
const arr = [1, 2, 3, 4, 5];
const rotatedArray = rotateLeft(d, arr);
console.log(rotatedArray.join(" "));

// Output: 5 1 2 3 4
