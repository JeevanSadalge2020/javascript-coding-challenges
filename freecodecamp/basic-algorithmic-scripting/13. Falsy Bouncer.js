// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
	const falsy = [null,false,0,"",undefined,NaN];
	const arr1 = [];
	arr.forEach(ele=>{
		if(!falsy.includes(ele)){
			arr1.push(ele)
		}
	})
	return arr1;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));