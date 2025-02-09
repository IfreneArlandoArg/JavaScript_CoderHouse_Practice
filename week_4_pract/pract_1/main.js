function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr.sort(() => Math.random() - 0.5); // Shuffle the array
}

//Returns an array of even numbers, from an array (received).
//Returns an array of empty numbers, in case the array is empty, or if there are no even numbers.
function getEvenNumbers(arr){
    let evenNumbers = [];

    arr.foreach(x =>{
        if(x % 2 === 0){
            evenNumbers.push(x);
        }
    });
  
    return evenNumbers;

}

//Returns an array of odd numbers, from an array (received).
//Returns an array of empty numbers, in case the array is empty, or if there are no odd numbers.
function getOddNumbers(arr){
    let oddNumbers = [];

    arr.foreach(x =>{
        if(x % 2 !== 0){
            oddNumbers.push(x);
        }
    });
  
    return oddNumbers;
}

//Receives an array of numbers, and returns an array of numbers (increasing order)....
function sortArrayIncreasingOrder(arr){
   arr.sort((a,b) => a - b);
   return arr;
}


//Receives an array of numbers, and returns an array of numbers (decreasing order)....
function sortArrayDecreasingOrder(arr){
    arr.reverse(sortArrayIncreasingOrder(arr));
    return arr;
}

function fnMenu(rndArray){

return parseInt(prompt(`Choose operation to be executed on the following array \n\[ ${rndArray.join(" - ")} \] : \n
1 - Get Even numbers.\n2 - Get odd numbers.\n3 - Sort in increasing order.\n4 - Sort in decreasing order.\n5 - Exit.`))
}


const randomArray = generateRandomArray(10, 1, 100); // Example: 10 random integers between 1 and 100
console.log(randomArray);


let menu = fnMenu(randomArray);

console.log(menu);

