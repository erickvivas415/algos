// Countdown: Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    var arr = [];
    var temp = num;

    for(var x=0;x<=num;x++) {
        arr[x] = temp;
        temp--
    }

    return arr;
}

console.log(countdown(9))

// First plus length: Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    if(typeof arr[0]  === "number") {
        return arr[0]+arr.length;
    }
    else {
        return "First value of the array is not a number";
    }
}

a=[true,1,2,3,4]

console.log(firstPlusLength(a))