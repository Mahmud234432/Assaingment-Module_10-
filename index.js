// Ans:1.
function calculateDifference(arg1, arg2) {
    const [x1, y1] = [arg1[0], arg1[1]];
    const [x2, y2] = [arg2[0], arg2[1]];
    const distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    console.log(distance);
}
const arg1 = [1, 1];
const arg2 = [2, 3];
calculateDifference(arg1,arg2);

// Ans:2.
function isOdd(num) {
    if (num%2 !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isOdd(3);
isOdd(4);

// Ans:3.
function findMin(arr) {
    const ascendingSort = arr.sort();
    console.log(ascendingSort[0]);
}
const numArr1 = [2, 3, 5, 8, 1, 2, 4, 6];
findMin(numArr1);

// Ans:4.
function filterEvenNumbers(arr) {
    let newArr = [];
    arr.forEach(e => {
        if (e%2 === 0) {
            newArr.push(e);
        };
    });
    console.log(newArr);
}
const numArr2 = [2, 3, 5, 8, 1, 9, 4, 6 , 7 , 10]
filterEvenNumbers(numArr2);


// Ans:5.
function sortArrayDescending(arr) {
    const sortArr = arr.sort();
    console.log(sortArr.reverse());
}
const numArr3 = [2, 3, 5, 8, 1, 2, 4, 6];
sortArrayDescending(numArr3);


// Ans:6.
function lowercaseFirstLetter(str) {
    const newStr = str.toLowerCase();
    console.log(newStr);
}
const _name = 'Mahmud';
lowercaseFirstLetter(_name);

// Ans:7.
function countVowels(str) {
    const newStr = str.toUpperCase();
    let count = 0;
    for (let x = 0; x < newStr.length; x++) {
        if (newStr[x] == 'A' || newStr[x] == 'E' || newStr[x] == 'I' || newStr[x] == 'O' || newStr[x] == 'U') {
            count++;
        }
    }
    console.log(count);

}
countVowels('Mahmudul Hasan');

// Ans:8.
function findAverage(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    console.log(sum/arr.length);
}
const numArr4 = [2, 4, 6, 8, 10];
findAverage(numArr4);