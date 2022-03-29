function findMinAndRemoveSorted(array) {
	let newMin;
	let sorted = [];
	while (array.length != 0) {
		newMin = findMinAndRemoveSorted(array);
		sorted.push(newMin);
	}
	return sorted;
}
let firstHalf =  [1, 2, 6, 7, 8]
let secondHalf =  [3, 4, 5, 9, 10]

function merge(firstHalf, secondHalf){
	let sorted = []
	while(firstHalf.length != 0 && secondHalf.length != 0){
		let currentMin = findMinAndRemoveSorted(firstHalf, secondHalf)
		sorted.push(currentMin)
	}
	return sorted.concat(firstHalf).concat(secondHalf)
}	