const result = [];

const freqMap = new Map();

for (const str of stringList) {
  if (freqMap.has(str)) {
    freqMap.set(str, freqMap.get(str) + 1);
  } else {
    freqMap.set(str, 1);
  }
}

for (const q of quries) {
  if (freqMap.has(q)) {
    result.push(freqMap.get(q));
  } else {
    result.push(0);
  }
}

return result;
