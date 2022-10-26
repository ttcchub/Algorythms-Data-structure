//binary search
// droping array on 2 parts and searching from middle the EXACT ELEMENT that we are looking for 


const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

function binarySearch(array, item) {
	let start = 0
	let end = array.length
	let middle;
	let found = false 
	let position = -1 // flag -1 if not found 
	while (found === false && start <= end) {
		count += 1
		middle = Math.floor((start + end)/2);
		if (array[middle] === item){
			found = true
			position = middle
			return position; 
		}
		if (item < array[middle]){
			end = middle - 1 
		}else{
			start = middle + 1
		}
	} 
	return position;
}

console.log(binarySearch(array, 8))
console.log(count)




/// first step: 

/// looking for central elemtent 
/// first elemnt and last eleemnt 
/// until elemtn not dounf or start and end postions not equel 
/// will spin in while until we wont find elemt or elemtns not equel 
/// sum start and end pouints / drop on two with math floor 

/// second step:
/// if elemtnt in array by index that we found
/// than we set flag as true, and possition wil be equel to middle 
/// iteration should finish , cuz we spin until  found = false
/// if we could find elemtn than we should check it 

/// thrid step:
/// if searching elemnt lower than elemnt in the middle , than we interested 
/// the left side of array is interesting for us  cuz elemmt lower than middle one
/// The same way procced with righ side doing if searcing elemt is bigger than middle one 

/// after that we pove starting possition just not to appear for exapmle right one or left one side
/// return position of the element 
/// if it was found we set in condition, if not we set it as -1
/// and as in line sort count amount of itterations 















