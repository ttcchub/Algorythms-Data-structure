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
