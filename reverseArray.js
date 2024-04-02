const data = `
4
1,2,3,4
`;

const reverseArray = (data) => {
  const N = data.toString().trim().split("\n");

  let reversed = [];
  const n = parseInt(N[0]);

  const mainArray = N[1].split(",").map(Number);

  for (let i = 0; i < n; i++) {
    reversed.push(mainArray[mainArray.length - 1 - i]);
  }
  console.log(reversed);
};

reverseArray(data);
