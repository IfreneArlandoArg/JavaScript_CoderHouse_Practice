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

const randomArray = generateRandomArray(10, 1, 100); // Example: 10 random integers between 1 and 100
console.log(randomArray);