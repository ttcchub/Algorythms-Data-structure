// Selection Sort

// first we looking for lowest elemnt in a whole array, after taht we move it to the whole beggining
// after taht we looking for the next lowest elemnt, 
// but already without counting previous elemnt 
// like this we swaping places of all elemtns and sorting them one by one


const arr = [0,5,33,6,73,2,31,4,1,2,16,7,8,1,2,6,7,8,0,1.5,32]
let count = 0


function selectionSort(array) {
	for (let i = 0; i<array.length; i++) {
		let indexMin = 1
		for (let j = i+1; j<array.length; j++) {
			if (array[i]<array[indexMin]) {
				indexMin = j 
			}
			count += 1
		}
		let tmp = array [i]
		array [i] = array [indexMin]
		array[indexMin] = tmp 
	}	
	return  array
}

console.log (selectionSort(arr))
console.log (arr.length)
console.log ('count = ', count)


// 0(1/2nˆ2) = 0 (n&ˆ2)

