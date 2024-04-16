const query = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

const getQuery = (arr) => {
  let a = arr[1];
  let b = arr[2];
  let k = arr[3];
};

const arrayManipulation = (query) => {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  query.forEach((q) => {
    let [a, b, k] = q;
    arr[a - 1] += k;
    arr[b] -= k;
  });

  console.log(arr);
};

//arrayManipulation(query);

function arrayManipulation1(n, queries) {
  let array = new Array(n + 1).fill(0);

  // Perform operations and update the array accordingly
  for (let i = 0; i < queries.length; i++) {
    let [a, b, k] = queries[i];
    array[a - 1] += k;
    array[b] -= k;

    console.log(array);
  }

  // Calculate prefix sums

  let max_value = 0;
  let prefix_sum = 0;
  for (let i = 0; i < n; i++) {
    prefix_sum += array[i];
    max_value = Math.max(max_value, prefix_sum);
  }

  return max_value;
}

// Example usage:
let n = 53;
let queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];
console.log(arrayManipulation1(n, queries)); // Output: 10
