// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array,ignoring case.

function mutation(arr) {
  const arr1 = arr[0].split("");
  const arr2 = arr[1].split("");
  for (const ele of arr2) {
    if (
      !(arr1.includes(ele.toLowerCase()) || arr1.includes(ele.toUpperCase()))
    ) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Aarmy"]));
