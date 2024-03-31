const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

const phoneBook = (input) => {
  const inputLines = input.split("\n");
  const n = parseInt(inputLines[0]);

  const phoneList = {};

  for (let i = 1; i <= n; i++) {
    const [name, phoneNumber] = inputLines[i].split(" ");
    phoneList[name] = phoneNumber;
  }

  for (i = n + 1; i < inputLines.length; i++) {
    inputLines[i].trim();
    if (inputLines[i] in phoneList) {
      console.log(`${inputLines[i]}=${phoneList[inputLines[i]]}`);
    } else {
      console.log("Not Found");
    }
  }
};

phoneBook(input);

/* expected output 
sam=99912222
Not Found
harry=12299933
*/
