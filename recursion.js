/** product: calculate the product of an array of numbers. */


function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, out = 0, i = 0) {
  if (i === words.length) return out;

  if (words[i].length > out) out = words[i].length;
  return longest(words, out=out, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = "", i = 0) {
  if (i === str.length) return out;

  if (i % 2 === 0) out += str[i];
  return everyOther(str, out=out, i + 1); 
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let leftIdx = i;
  let rightIdx = str.length - i - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out = [], i = 0) {
  if (out.length === str.length) return out;
  out += str[str.length - 1 - i];
  return revString(str, out, i+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0) {
  if (i === arr.length) return -1;

  if (arr[i] === val) return i;
  return binarySearch(arr, val, i + 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
