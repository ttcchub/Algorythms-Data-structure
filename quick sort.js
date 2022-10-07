// quick sorting 

const arr = [0,5,33,6,73,2,311,4,1,2,16,7,8,1,2,6,7,8,0,1.5,32]
let count = 0

function quickSort(array) {
	if (array.length <= 1) {
		return array
	}
	let pivotIndex = Math.floor(array.length / 2);
	let pivot =  array[pivotIndex]
	let less = []
	let greater = []
	for(let i = 0; i < array.length; i++ ) {
	count += 1
		if ( i === pivotIndex)
			continue 
		if (array[i] < pivot){
			less.push(array[i])
		}else{
			greater.push(array[i])
		}
	}
	return [...quickSort(less), pivot,  ...quickSort(greater)]
} 

console.log (quickSort(arr)) 
console.log ('count' , count)