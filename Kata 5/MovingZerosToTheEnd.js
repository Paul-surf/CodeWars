// Kata 5 - Moving Zeros To The End
function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        i--;
        count++;
      }
    }
    for (let j = 0; j < count; j++) {
      arr.push(0);
    }
    return arr;
}

console.log(moveZeros([1,6,3,7,4,0,0,4,2,7,0,45,4]))