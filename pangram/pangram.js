/* 6 kyu
Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/
// const isPangram = (str) => {
//    str = str.toLowerCase()
//    let string = "The quick brown fox jumps over the lazy dog";
//    let strMatch = string.match(/[a-zA-Z]/g)
//    compare = true;
//    for (s of strMatch) {
//       compare &= str.includes(s)
//    }
//    console.log(compare)
//    return Boolean(compare)
// }

// const isPangram = (str) => {
//   str = str.toLowerCase();
//   let string = "The quick brown fox jumps over the lazy dog".toLowerCase();
//    let aToZ = string.match(/[a-z]/g);
//    console.log(aToZ)
//   for (let s of aToZ) {
//     if (!str.includes(s)) return false;
//   }
//   return true;
// };

// const isPangram = (str) => {
//    // make input case insensitive
//    str = str.toLowerCase();

//    // get all lowercase letters
//   let string = "The quick brown fox jumps over the lazy dog".toLowerCase();
//    let aToZ = string.match(/[a-z]/g);

//    //compare if all is included
//   for (let s of aToZ) {
//     if (!str.includes(s)) return false;
//   }
//   return true;
// };

// const isPangram = (str) => {
//   str = str.toLowerCase();
//   let string = "The quick brown fox jumps over the lazy dog".toLowerCase();
//   let aToZ = string.match(/[a-z]/g);
//   console.log(aToZ);
//   for (let i = 0; i < aToZ.length; i++) {
//     if (!str.includes(aToZ[i])) return false;
//   }
//   return true;
// };

const isPangram = (str) => {
  // make input case insensitive
  str = str.toLowerCase();

  // get all lowercase letters
  let string = "The quick brown fox jumps over the lazy dog".toLowerCase();
  let aToZ = string.match(/[a-z]/g);

  //compare if all is included
  for (let s of aToZ) {
    if (!str.includes(s)) return false;
  }

  return true;
};
console.log(["a", "a"].every((str) => str == "a"));

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// const isPangram1 = (str) => {
//    let arr1 = "abcdefghijklmnopqrstuvwxyz".split("")
//    let arr2 = str.toLowerCase().split("");
//    return arr1.every((e) => arr2.includes(e));
// }

const isPangram1 = (str) => {
  str = str.toLowerCase();
  let map = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };
  for (let char of str) {
    map[char] = true;
  }
  let values = Object.values(map);
  for (let inc of values) {
    if (inc === false) return false;
  }
  return true;
};

console.log(isPangram1("The quick brown fox jumps over the lazy dog"));
