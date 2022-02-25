// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            for(var j=i;j<arr.length-i;j++){
                arr[j]=arr[j+1];
            }
            arr.pop();
        }
    }
    return arr;
}

console.log(removeNegatives([1,-2,3,4,-5]))

// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr){
    if(arr.length<2){
        return null;
    }
    else{
        return arr[arr.length-2];
    }
}

console.log(secondToLast([2,3,4,5,6]))

// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function secondToLargest(arr){
    var maxValue = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            arr[i]=;
        }

    }
}