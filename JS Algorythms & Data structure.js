//               SORTING & SEARCHING teqnics 
//




//---------------->  Linear Search  <-------------\\
 

const array1 = [1,4,1,5,1,2,6,8,2,6,83,25,2]

let count1 = 0

function linearSearch (array, item) {
	for (let i = 0; i < array.lenght; i++) {
		count += 1
	if (array[i] === item) {
		return i;
		}
	}
	return null
}

console.log (linearSearch (array,15))
console.log ('count = ', count )

 

//---------------->  Binary Search  <-------------\\
// working only with ordered list giving the center Numb of arary

const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let count = 0

function binarySearch ( array, item) {
	let start = 0
	let end = array.length 
	let middle;
	let found = false //flag
	let position = -1

	while ( found === false && start <= end ) {
		count +=1
		middle = Math.floor ((start + end))/2;
		if (array[middle]===item){
			found = true
			position = middle
			return position;
		} 
		if (item < array[middle]) {
			end = middle - 1
		} else { 
			start = middle + 1
		}	
	}
	return position; 

}

console.log (binarySearch(array, 8))
console.log (count)


//---------------->  Quick Search  <-------------\\
// 

const arr = [ 0,5,2,6,1,3,61,76,2,623,71,6,7,0,2,3,7];
let count = 0; 

function quickSort(array) {
	if (array.lenght <= 1) {
		return array
	}
	let pivotIndex = Math.floor (array.length / 2);
	let pivot = array [pivotIndex]
	let less = []
	let greater = []
	for (let i = 0;  i < array.lenght; i++) {
		count += 1
		if ( i === pivotIndex)
			continue
		if (array[i] < pivot) {
			less.push(array[i])
		}else{
			greater.push(array[i])
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)]
}
console.log(quickSort(arr))
console.log('count', count)


// quick sorting 
// algorythm 

// 0(log2n*n) -> n= 128  ~ 0.6 secongs
//            -> n= 1024  ~ 10 secongs


//when 
// 0(nˆ2)     -> n= 128  ~ 16 secongs
//            -> n= 1024 ~ 7 secongs
//  - - - - 1operation = 1ms - - - - 

//separate & control function

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


/// base solution when recursion will end up 
// we will take central postion of index -> arr.length / 2.math.floor
// recive element calling by index
// we need to arrays where we can store lower that middle one & those are bigger that middle 

// we shuld compare each elemt with refrence element 
// we will have 3 Conditions: 

// 1) compare currend itteration index with refrence middle refrence point, 
//And if they are equel we will pass iteration with key  'contnue '
// 2) If current itaration element less < than refrence we add it to array less 
// 3) Reverse situation we just add it bigger array

// after all circle cycle we would have to 




//---------------->  // Selection Sort <-------------\\


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




//---------------->  // Quick Sort <-------------\\

// Fuaro Sort (quick sort)

/// Recursive sort
/// rucrsion is function that call it self
/// shoudl always have such a condition to have end-point 
/// whre call off function will finish 
/// or functio will call itself endlessly

//reqursive function example 
const factorial = (n) => {
	if (n===1){
		return 1
	}
	return n * factorial ( n - 1)
}


// fibonachi numbs
// 1,1,2,3,5,8,13

// each next num is a sum of previous two nums

const fibonachi  = (n) => {
	if (n===1 || n === 2 ){
		return 1
	}
	return fibonachi (n-1) + fibonachi (n-2)
}

console.log (fibonachi(21))




