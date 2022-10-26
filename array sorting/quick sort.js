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












