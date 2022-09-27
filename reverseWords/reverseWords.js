/*
Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  console.log("normal: " + str.length);
  //   let test =  str.split("").reverse().join(" ");
  //   console.log("First: " + test)
  //   test = str.split(" ").reverse().join(" ");
  //   console.log("Second: " + test)
// let strResult;
//   for (let i = 0; i < str.length; i++) {
//     console.log("str[i]: " + str[i])
//     strResult += str[i];

//   }
//   console.log("strResult: " +strResult)
//   let strSplit = strResult.split(",").reverse().join("")
//   console.log("strSplit: " + strSplit)
// }

reverseWords("The quick brown fox jumps over the lazy dog."); //ehT kciuq nworb xof spmuj revo eht yzal .god
reverseWords("apple"); // elppa
reverseWords("a b c d"); //a b c d
reverseWords("double  spaced  words"); //elbuod  decaps  sdrow
